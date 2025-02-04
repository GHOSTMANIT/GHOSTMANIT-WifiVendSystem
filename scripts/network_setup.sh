#!/bin/bash

sudo timedatectl set-timezone Asia/Manila

if ! timedatectl set-ntp true; then
    echo "Warning: NTP not supported. Proceeding without time synchronization."
fi

sudo apt-get update
sudo apt-get install -y dnsmasq isc-dhcp-client nginx

sudo mkdir -p /etc/network/interfaces.d

WAN_INTERFACE="wan0"
USB_LAN_INTERFACE="usb0"

sudo cat > /etc/network/interfaces.d/$WAN_INTERFACE <<EOF
auto $WAN_INTERFACE
iface $WAN_INTERFACE inet dhcp
EOF

sudo ip link set dev $WAN_INTERFACE up
sudo dhclient $WAN_INTERFACE

sudo cat > /etc/network/interfaces.d/$USB_LAN_INTERFACE <<EOF
auto $USB_LAN_INTERFACE
iface $USB_LAN_INTERFACE inet dhcp
EOF

sudo ip link set dev $USB_LAN_INTERFACE up

sudo cat > /etc/dnsmasq.conf <<EOF
interface=$USB_LAN_INTERFACE
dhcp-range=101.0.0.10,101.0.0.100,12h
dhcp-option=3,101.0.0.1
dhcp-option=6,101.0.0.1
server=8.8.8.8
EOF

sudo systemctl restart dnsmasq
if ! systemctl is-active --quiet dnsmasq; then
    echo "Error: dnsmasq service failed to start. Check logs with 'journalctl -u dnsmasq'."
    exit 1
fi

sudo rm -f /etc/nginx/sites-available/ghostmanit.conf
sudo rm -f /etc/nginx/sites-enabled/ghostmanit.conf

sudo cat > /etc/nginx/sites-available/ghostmanit.services <<EOF
server {
    listen 80;
    server_name localhost;

    location / {
        root /home/ghostmanit/GHOSTMANIT/pisowifi_frontend;
        index index.html;
        try_files \$uri \$uri/ =404;
    }

    listen 443 ssl;
    ssl_certificate /home/ghostmanit/GHOSTMANIT/ssl/certificates/ghostmanit.crt;
    ssl_certificate_key /home/ghostmanit/GHOSTMANIT/ssl/certificates/ghostmanit.key;
}
EOF

sudo ln -s /etc/nginx/sites-available/ghostmanit.services /etc/nginx/sites-enabled/

sudo systemctl restart nginx
if ! systemctl is-active --quiet nginx; then
    echo "Error: Nginx service failed to start. Check logs with 'journalctl -u nginx'."
    exit 1
fi

echo "Network setup complete. USB-to-LAN interface configured with gateway IP: 101.0.0.1 and Nginx is running."
