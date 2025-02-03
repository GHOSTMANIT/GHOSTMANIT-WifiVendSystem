<<<<<<< HEAD
<<<<<<< HEAD
#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Color codes
RESET="\033[0m"      # Normal
GREEN="\033[32m"     # Success
RED="\033[31m"       # Error
YELLOW="\033[33m"    # Info
VIOLET="\033[35m"    # Warning

# Function to run a command and check for errors
=======
=======
>>>>>>> 0ee3b433 (Initial commit)
Here is the provided Bash script with all comments removed:

```bash
#!/bin/bash

set -e

RESET="\033[0m"
GREEN="\033[32m"
RED="\033[31m"
YELLOW="\033[33m"
VIOLET="\033[35m"

<<<<<<< HEAD
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
run_command() {
    echo -e "${YELLOW}Running command: $1${RESET}"
    eval $1
}

<<<<<<< HEAD
<<<<<<< HEAD
# Function to check if a command exists
=======
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

<<<<<<< HEAD
<<<<<<< HEAD
# Function to install Rust and Cargo with retry logic
install_rust() {
    echo -e "${YELLOW}Installing Rust and Cargo...${RESET}"
    for i in {1..3}; do  # Try up to 3 times
        run_command "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y" && break || {
            echo -e "${RED}Failed to install Rust. Retrying... (${i}/3)${RESET}"
            sleep 5  # Wait before retrying
        }
    done
    echo -e "${GREEN}Rust and Cargo installed successfully.${RESET}"
    # Add Rust to the PATH for the current session
    source $HOME/.cargo/env
    # Install the stable toolchain
    run_command "rustup toolchain install stable"
}

# Function to check if Rust is installed
=======
=======
>>>>>>> 0ee3b433 (Initial commit)
install_rust() {
    echo -e "${YELLOW}Installing Rust and Cargo...${RESET}"
    for i in {1..3}; do
        run_command "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y" && break || {
            echo -e "${RED}Failed to install Rust. Retrying... (${i}/3)${RESET}"
            sleep 5
        }
    done
    echo -e "${GREEN}Rust and Cargo installed successfully.${RESET}"
    source $HOME/.cargo/env
    run_command "rustup toolchain install stable"
}

<<<<<<< HEAD
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
check_rust() {
    if ! command_exists rustc; then
        echo -e "${RED}Rust is not installed. Installing Rust and Cargo...${RESET}"
        install_rust
    else
        echo -e "${GREEN}Rust is already installed.${RESET}"
    fi
}

<<<<<<< HEAD
<<<<<<< HEAD
# Function to update and upgrade the system
=======
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
update_system() {
    echo -e "${YELLOW}Updating and upgrading the system...${RESET}"
    run_command "sudo apt update"
    run_command "sudo apt upgrade -y"
}

<<<<<<< HEAD
<<<<<<< HEAD
# Function to install required packages
=======
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
install_packages() {
    echo -e "${YELLOW}Installing required packages...${RESET}"
    local packages=("python3" "python3-pip" "python3-dev")
    run_command "sudo apt install -y ${packages[*]}"
}

<<<<<<< HEAD
<<<<<<< HEAD
# Function to install required Python packages globally
=======
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
install_python_packages() {
    echo -e "${YELLOW}Installing required Python packages globally...${RESET}"
    local python_packages=("argon2-cffi" "cryptography")
    for pkg in "${python_packages[@]}"; do
<<<<<<< HEAD
<<<<<<< HEAD
        run_command "sudo apt install -y python3-$pkg"  # Install using apt
    done
}

# Function to run the password manager script
=======
=======
>>>>>>> 0ee3b433 (Initial commit)
        run_command "sudo apt install -y python3-$pkg"
    done
}

<<<<<<< HEAD
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
run_password_manager() {
    echo -e "${YELLOW}Running the password manager script...${RESET}"
    run_command "python3 password_manager.py"
    echo -e "${GREEN}password_manager.py script ran successfully.${RESET}"
}

<<<<<<< HEAD
<<<<<<< HEAD
# Main script execution
=======
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
if ! command_exists python3; then
    echo -e "${RED}Error: python3 is not installed. Please install it and try again.${RESET}"
    exit 1
fi

<<<<<<< HEAD
<<<<<<< HEAD
# Check for Rust and install if necessary
check_rust  # Check for Rust before proceeding

# Update system and install required packages
update_system
install_packages

# Install required Python packages globally
install_python_packages

# Directly run the password manager script
run_password_manager

# Continue with other commands if needed
echo -e "${GREEN}Setup complete!${RESET}"
=======
=======
>>>>>>> 0ee3b433 (Initial commit)
check_rust

update_system
install_packages

install_python_packages

run_password_manager

echo -e "${GREEN}Setup complete!${RESET}"
<<<<<<< HEAD
```
>>>>>>> cb5d6b8d (Initial commit)
=======
```
>>>>>>> 0ee3b433 (Initial commit)
