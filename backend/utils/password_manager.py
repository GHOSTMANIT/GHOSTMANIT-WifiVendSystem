import random
import string
import os
import logging
import json
from datetime import datetime
from argon2 import PasswordHasher
from cryptography.fernet import Fernet
from logging.handlers import RotatingFileHandler

<<<<<<< HEAD
<<<<<<< HEAD
def generate_key():
    return Fernet.generate_key()

=======
def generate_key():
    return Fernet.generate_key()

>>>>>>> cb5d6b8d (Initial commit)
=======
def generate_key():
    return Fernet.generate_key()

>>>>>>> 0ee3b433 (Initial commit)
def load_key():
    key_file = os.path.join(os.path.dirname(__file__), 'secret.key')
    if os.path.exists(key_file):
        with open(key_file, "rb") as file:
            return file.read()
    else:
        key = generate_key()
        with open(key_file, "wb") as file:
            file.write(key)
        return key

<<<<<<< HEAD
<<<<<<< HEAD
key = load_key()
cipher = Fernet(key)

log_file = os.path.join(os.path.dirname(__file__), 'password_generator.log')
handler = RotatingFileHandler(log_file, maxBytes=5*1024*1024, backupCount=5)  # 5 MB per log file
=======
=======
>>>>>>> 0ee3b433 (Initial commit)
key = load_key()
cipher = Fernet(key)

log_file = os.path.join(os.path.dirname(__file__), 'password_generator.log')
handler = RotatingFileHandler(log_file, maxBytes=5*1024*1024, backupCount=5)
<<<<<<< HEAD
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
logging.basicConfig(
    handlers=[handler],
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
<<<<<<< HEAD
<<<<<<< HEAD
    datefmt='%b-%d-%Y %H:%M:%S'  # Custom date format without milliseconds
)
logging.info("Password generation script started.")
PASSWORD_FILE = os.path.join(os.path.dirname(__file__), 'generated_passwords.json')
CATEGORY_FILE = os.path.join(os.path.dirname(__file__), 'categories.json')
ph = PasswordHasher()
def load_generated_passwords():
    """Load previously generated passwords from a file."""
=======
=======
>>>>>>> 0ee3b433 (Initial commit)
    datefmt='%b-%d-%Y %H:%M:%S'
)

logging.info("Password generation script started.")

PASSWORD_FILE = os.path.join(os.path.dirname(__file__), 'generated_passwords.json')
CATEGORY_FILE = os.path.join(os.path.dirname(__file__), 'categories.json')
ph = PasswordHasher()

def load_generated_passwords():
<<<<<<< HEAD
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
    if os.path.exists(PASSWORD_FILE):
        with open(PASSWORD_FILE, "r") as file:
            return json.load(file)
    return {}

def save_generated_password(category, username, hashed_password, encrypted_password, note):
<<<<<<< HEAD
<<<<<<< HEAD
    """Save a newly generated password to the file."""
    # Load existing passwords
    passwords = load_generated_passwords()
    
    # Create a new entry
    entry = {
        "username": username,
        "hashed_password": hashed_password,  # Store hashed password
        "encrypted_password": encrypted_password,  # Store encrypted password
        "note": note
    }
    
    # Add the entry to the specified category
    if category not in passwords:
        passwords[category] = []
    passwords[category].append(entry)
    
    # Save back to the JSON file
    with open(PASSWORD_FILE, "w") as file:
        json.dump(passwords, file, indent=4)
    
    logging.info(f"Password saved for user: {username} in category: {category}")  # Log the saved password

def load_categories():
    """Load categories and their passwords from a JSON file."""
=======
=======
>>>>>>> 0ee3b433 (Initial commit)
    passwords = load_generated_passwords()
    entry = {
        "username": username,
        "hashed_password": hashed_password,
        "encrypted_password": encrypted_password,
        "note": note
    }
    if category not in passwords:
        passwords[category] = []
    passwords[category].append(entry)
    with open(PASSWORD_FILE, "w") as file:
        json.dump(passwords, file, indent=4)
    logging.info(f"Password saved for user: {username} in category: {category}")

def load_categories():
<<<<<<< HEAD
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
    if os.path.exists(CATEGORY_FILE):
        with open(CATEGORY_FILE, "r") as file:
            return json.load(file)
    return {}

def save_categories(categories):
<<<<<<< HEAD
<<<<<<< HEAD
    """Save categories and their passwords to a JSON file."""
=======
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
    with open(CATEGORY_FILE, "w") as file:
        json.dump(categories, file, indent=4)
    logging.info("Categories saved.")

def delete_category(category):
<<<<<<< HEAD
<<<<<<< HEAD
    """Delete a category from the file."""
=======
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
    categories = load_categories()
    if category in categories:
        del categories[category]
        save_categories(categories)
        logging.info(f"Category deleted: {category}")

def generate_strong_password(prefix, length=16):
<<<<<<< HEAD
<<<<<<< HEAD
    """Generate a strong password with a given prefix."""
=======
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
    lowercase = string.ascii_lowercase
    uppercase = string.ascii_uppercase
    digits = string.digits
    special_characters = string.punctuation
    all_characters = lowercase + uppercase + digits + special_characters

    while True:
        password = [
            random.choice(lowercase),
            random.choice(uppercase),
            random.choice(digits),
            random.choice(special_characters)
        ]
        password += random.choices(all_characters, k=length - 4)
        random.shuffle(password)
        final_password = f"{prefix}{''.join(password)}"
<<<<<<< HEAD
<<<<<<< HEAD

        # Log generated password
        logging.info("Generated password created.")

=======
        logging.info("Generated password created.")
>>>>>>> cb5d6b8d (Initial commit)
=======
        logging.info("Generated password created.")
>>>>>>> 0ee3b433 (Initial commit)
        if final_password not in load_generated_passwords():
            return final_password

def show_category_content(category):
<<<<<<< HEAD
<<<<<<< HEAD
    """Display the content of a specific category."""
=======
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
    categories = load_categories()
    if category in categories:
        print(f"INFO: Showing the category content named: \"{category}\"")
        for entry in categories[category]:
            print(f"INFO: {datetime.now().strftime('%m:%d:%Y %H:%M:%S')}")
            print(f"\t CATEGORY : {category}")
            print(f"\t Username : {entry['username']}")
<<<<<<< HEAD
<<<<<<< HEAD
            print(f"\t Hashed Password : {entry['hashed_password']}")  # Display hashed password
=======
            print(f"\t Hashed Password : {entry['hashed_password']}")
>>>>>>> cb5d6b8d (Initial commit)
=======
            print(f"\t Hashed Password : {entry['hashed_password']}")
>>>>>>> 0ee3b433 (Initial commit)
            print(f"\t Encrypted Password : {entry['encrypted_password']}")
            print(f"\t Note : {entry['note']}")
    else:
        print("Category not found.")

def decryption_menu():
<<<<<<< HEAD
<<<<<<< HEAD
    """Display the decryption menu and handle user input."""
=======
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
    while True:
        print("\nDECRYPTION MENU")
        print("[ 1 ] DECRYPT PASSWORD")
        print("[ E ] EXIT")

        choice = input("SELECT OPTION: ").strip().upper()

        if choice == '1':
            encrypted_password = input("Enter the encrypted password: ").strip()
            try:
                decrypted_password = cipher.decrypt(encrypted_password.encode()).decode()
                print(f"Decrypted Password: {decrypted_password}")
            except Exception as e:
                print(f"ERROR: Decryption failed. {str(e)}")

        elif choice == 'E':
            print("Exiting decryption menu.")
            break

        else:
            print("Invalid option. Please choose again.")

def main_menu():
<<<<<<< HEAD
<<<<<<< HEAD
    """Display the main menu and handle user input."""
=======
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
    while True:
        print("\nMAIN MENU")
        print("[ 1 ] SHOW LIST OF CATEGORY")
        print("[ 2 ] CREATE CATEGORY")
        print("[ 3 ] DELETE CATEGORY")  
        print("[ 4 ] SHOW CATEGORIES CONTENT")
        print("[ 5 ] GENERATE PASSWORD")
        print("[ E ] EXIT")

        choice = input("SELECT OPTION: ").strip().upper()

<<<<<<< HEAD
<<<<<<< HEAD
        # Check for the hidden command
        if choice == 'GHOSTMANIT':
            decryption_menu()
            continue  # Go back to the main menu after exiting decryption menu
=======
        if choice == 'GHOSTMANIT':
            decryption_menu()
            continue
>>>>>>> cb5d6b8d (Initial commit)
=======
        if choice == 'GHOSTMANIT':
            decryption_menu()
            continue
>>>>>>> 0ee3b433 (Initial commit)

        if choice == '1':
            categories = load_categories()
            print("Available Categories:")
            for category in categories.keys():
                print(f"- {category}")

        elif choice == '2':
            print("Creating new Category")
            new_category = input("SYSTEM: What is the name of your Category: ").strip()
            categories = load_categories()
            if new_category in categories:
                print(f"ERROR: The category named \"{new_category}\" already exists.")
            else:
                categories[new_category] = []
                save_categories(categories)
                print(f"INFO: Created new category named \"{new_category}\".")

        elif choice == '3':
            category_to_delete = input("Enter the name of the category to delete: ").strip()
            delete_category(category_to_delete)
            print(f"INFO: Deleted category named \"{category_to_delete}\".")

        elif choice == '4':
            print("SYSTEM: Showing list of categories")
            categories = load_categories()
            print("INFO: List of Categories")
            for idx, category in enumerate(categories.keys(), start=1):
                print(f"\t[ {idx} ] {category}")
            print("\t[ B ] Back")
            category_choice = input("SYSTEM: Please select: ").strip().upper()
            if category_choice == 'B':
                continue
            else:
                try:
                    category_index = int(category_choice) - 1
                    if category_index < 0 or category_index >= len(categories):
                        raise ValueError("Invalid category index.")
                    category_to_show = list(categories.keys())[category_index]
                    show_category_content(category_to_show)
                except ValueError:
                    print("ERROR: Invalid selection. Please select a valid category.")
<<<<<<< HEAD
<<<<<<< HEAD
                    continue  # Go back to the main menu
=======
                    continue
>>>>>>> cb5d6b8d (Initial commit)
=======
                    continue
>>>>>>> 0ee3b433 (Initial commit)

        elif choice == '5':
            purpose = input("SYSTEM: What is the purpose of the generated password: ").strip()
            username = input("What is username: ").strip()
            prefix = input("Enter a prefix for the password: ").strip()
            generated_password = generate_strong_password(prefix)
            print(f"INFO: Generated password success: {generated_password}")

            print("SYSTEM: What category do you want to save that?")
            categories = load_categories()
            print("SYSTEM: Showing list of categories...")
            for idx, category in enumerate(categories.keys(), start=1):
                print(f"\t[ {idx} ] {category}")
            print("\t[ N ] Create new")

            category_choice = input("SYSTEM: Please select: ").strip().upper()
            if category_choice == 'N':
                new_category = input("What is the name of your new category: ").strip()
                if new_category in categories:
                    print(f"ERROR: The category named \"{new_category}\" already exists.")
                else:
                    categories[new_category] = []
                    save_categories(categories)
                    print(f"INFO: Created new category named \"{new_category}\".")
                    category_to_save = new_category
            else:
                try:
                    category_index = int(category_choice) - 1
                    if category_index < 0 or category_index >= len(categories):
                        raise ValueError("Invalid category index.")
                    category_to_save = list(categories.keys())[category_index]
                except ValueError:
                    print("ERROR: Invalid selection. Please select a valid category.")
<<<<<<< HEAD
<<<<<<< HEAD
                    continue  # Go back to the main menu

            # Hash the password before saving
            hashed_password = ph.hash(generated_password)
            # Encrypt the original password
            encrypted_password = cipher.encrypt(generated_password.encode()).decode()
            
            entry = {
                'hashed_password': hashed_password,  # Save hashed password
                'username': username,
                'encrypted_password': encrypted_password,  # Include encrypted password
=======
=======
>>>>>>> 0ee3b433 (Initial commit)
                    continue

            hashed_password = ph.hash(generated_password)
            encrypted_password = cipher.encrypt(generated_password.encode()).decode()
            
            entry = {
                'hashed_password': hashed_password,
                'username': username,
                'encrypted_password': encrypted_password,
<<<<<<< HEAD
>>>>>>> cb5d6b8d (Initial commit)
=======
>>>>>>> 0ee3b433 (Initial commit)
                'note': purpose
            }
            categories[category_to_save].append(entry)
            save_categories(categories)
            print(f"INFO: The information above will save to category named \"{category_to_save}\".")

        elif choice == 'E':
            print("INFO: Closing the program, have a nice day.")
            logging.info("INFO: Exiting the program, thank you.")
            break

        else:
            print("Invalid option. Please choose again.")

<<<<<<< HEAD
<<<<<<< HEAD
# Load previously generated passwords
generated_passwords = load_generated_passwords()

# Start the main menu
=======
generated_passwords = load_generated_passwords()
>>>>>>> cb5d6b8d (Initial commit)
=======
generated_passwords = load_generated_passwords()
>>>>>>> 0ee3b433 (Initial commit)
main_menu()
