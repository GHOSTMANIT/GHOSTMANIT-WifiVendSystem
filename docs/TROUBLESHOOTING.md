# Troubleshooting Guide for GHOSTMANIT Pisowifi Vending Machine

## Common Issues

### 1. Nginx Fails to Start
If Nginx fails to start, check the following:
- Ensure that the SSL certificate and key are correctly configured in the `ssl/config/nginx.conf` file.
- Verify that the ports are not being used by other services.

### 2. Coin Insertion Not Detected
If the coin insertion is not detected:
- Check the GPIO pin connections and ensure they are correctly wired.
- Verify that the `onoff` library is installed and functioning properly.

### 3. Session Not Found
If you receive a "Session not found" error:
- Ensure that the session ID is correct and that the session has not expired.
- Check the server logs for any errors related to session management.

### 4. Frontend Not Loading
If the frontend does not load:
- Ensure that the backend server is running.
- Check the console for any JavaScript errors that may prevent the frontend from functioning.

For further assistance, please refer to the README file or contact support.
