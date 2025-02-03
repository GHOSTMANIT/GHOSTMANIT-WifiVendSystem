import random
import string
import os
import logging
import json

# Configure logging with custom timestamp format
logging.basicConfig(
    filename=os.path.join(os.path.dirname(__file__), 'password_generator.log'),
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    datefmt='%b-%d-%Y %H:%M:%S'  # Custom date format without milliseconds
)

# Log the start of the script
logging.info("Password generation script started.")

# File to store previously generated passwords
PASSWORD_FILE = os.path.join(os.path.dirname(__file__), 'generated_passwords.txt')
CATEGORY_FILE = os.path.join(os.path.dirname(__file__), 'password_categories.json')

def load_generated_passwords():
    """Load previously generated passwords from a file."""
    if os.path.exists(PASSWORD_FILE):
        with open(PASSWORD_FILE, "r") as file:
            return set(line.strip() for line in file)
    return set()

def save_generated_password(password):
    """Save a newly generated password to the file."""
    with open(PASSWORD_FILE, "a") as file:
        file.write(password + "\n")
    logging.info(f"Password saved: {password}")

def generate_strong_password(prefix, length=16):
    """Generate a strong password with a given prefix."""
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

        # Log generated password
        logging.info(f"Generated password: {final_password}")

        if final_password not in generated_passwords:
            save_generated_password(final_password)
            logging.info(f"Generated unique password: {final_password}")
            return final_password

def load_categories():
    """Load password categories from a JSON file."""
    if os.path.exists(CATEGORY_FILE):
        with open(CATEGORY_FILE, "r") as file:
            try:
                return json.load(file)
            except json.JSONDecodeError:
                logging.error("Failed to decode JSON from categories file. Returning empty category list.")
                return []
    return []

def save_categories(categories):
    """Save password categories to a JSON file."""
    with open(CATEGORY_FILE, "w") as file:
        json.dump(categories, file)

def select_category(categories):
    """Prompt the user to select a category from existing categories."""
    if categories:
        print("Please select a category from the following:")
        for index, category in enumerate(categories, start=1):
            print(f"{index}. {category}")
        
        while True:
            try:
                choice = int(input("Enter the number of your selected category: "))
                if 1 <= choice <= len(categories):
                    return categories[choice - 1]
                else:
                    print("Invalid choice. Please select a valid category number.")
            except ValueError:
                print("Please enter a valid number.")
    return None

# Load previously generated passwords
generated_passwords = load_generated_passwords()

# Load existing categories
categories = load_categories()

# Display existing categories and allow user to select or create a new one
selected_category = select_category(categories)

# If no category is selected, prompt to create a new one
if selected_category is None:
    new_category = input("No existing categories found. Enter a new category name: ")
    if new_category:
        categories.append(new_category)
        save_categories(categories)
        selected_category = new_category
        logging.info(f"New category added: {selected_category}")
else:
    # Ask if the user wants to create a new category after selecting an existing one
    create_new = input("Would you like to create a new category? (yes/no): ").strip().lower()
    if create_new == 'yes':
        new_category = input("Enter the new category name: ")
        if new_category:
            categories.append(new_category)
            save_categories(categories)
            selected_category = new_category
            logging.info(f"New category added: {selected_category}")

# User input for the purpose of the password
purpose = input("What is the purpose of this password? ")
logging.info(f"Purpose of the password: {purpose}")  # Log the purpose

# Define the prefix
prefix = "GHOSTMANIT_"

# User input for the number of passwords to generate
while True:
    try:
        num_passwords = int(input("How many unique passwords would you like to generate? "))
        if num_passwords <= 0:
            print("Please enter a positive number.")
            continue
        break
    except ValueError:
        print("Invalid input. Please enter a valid number.")

# Generate and display the passwords
for _ in range(num_passwords):
    strong_password_with_prefix = generate_strong_password(prefix)
    print(f"Generated Unique Password: {strong_password_with_prefix} (Category: {selected_category})")

# Log the end of the script
logging.info("Password generation script finished.")