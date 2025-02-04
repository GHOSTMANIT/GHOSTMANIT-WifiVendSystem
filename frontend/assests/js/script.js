const random = require('random');
const fs = require('fs');
const path = require('path');
const logging = require('loglevel');
const json = require('jsonfile');

logging.setLevel('info');
logging.info("Password generation script started.");

const PASSWORD_FILE = path.join(__dirname, 'generated_passwords.txt');
const CATEGORY_FILE = path.join(__dirname, 'password_categories.json');

function loadGeneratedPasswords() {
    if (fs.existsSync(PASSWORD_FILE)) {
        return new Set(fs.readFileSync(PASSWORD_FILE, "utf-8").split('\n').map(line => line.trim()));
    }
    return new Set();
}

function saveGeneratedPassword(password) {
    fs.appendFileSync(PASSWORD_FILE, password + "\n");
    logging.info(`Password saved: ${password}`);
}

function generateStrongPassword(prefix, length = 16) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';
    const allCharacters = lowercase + uppercase + digits + specialCharacters;

    while (true) {
        const password = [
            random.choice(lowercase),
            random.choice(uppercase),
            random.choice(digits),
            random.choice(specialCharacters)
        ];
        password.push(...random.sample(allCharacters, length - 4));
        random.shuffle(password);
        const finalPassword = `${prefix}${password.join('')}`;

        logging.info(`Generated password: ${finalPassword}`);

        if (!generatedPasswords.has(finalPassword)) {
            saveGeneratedPassword(finalPassword);
            logging.info(`Generated unique password: ${finalPassword}`);
            return finalPassword;
        }
    }
}

function loadCategories() {
    if (fs.existsSync(CATEGORY_FILE)) {
        try {
            return json.readFileSync(CATEGORY_FILE);
        } catch (error) {
            logging.error("Failed to decode JSON from categories file. Returning empty category list.");
            return [];
        }
    }
    return [];
}

function saveCategories(categories) {
    json.writeFileSync(CATEGORY_FILE, categories);
}

function selectCategory(categories) {
    if (categories.length) {
        console.log("Please select a category from the following:");
        categories.forEach((category, index) => {
            console.log(`${index + 1}. ${category}`);
        });

        while (true) {
            const choice = parseInt(prompt("Enter the number of your selected category: "), 10);
            if (choice >= 1 && choice <= categories.length) {
                return categories[choice - 1];
            } else {
                console.log("Invalid choice. Please select a valid category number.");
            }
        }
    }
    return null;
}

const generatedPasswords = loadGeneratedPasswords();
const categories = loadCategories();
let selectedCategory = selectCategory(categories);

if (!selectedCategory) {
    const newCategory = prompt("No existing categories found. Enter a new category name: ");
    if (newCategory) {
        categories.push(newCategory);
        saveCategories(categories);
        selectedCategory = newCategory;
        logging.info(`New category added: ${selectedCategory}`);
    }
} else {
    const createNew = prompt("Would you like to create a new category? (yes/no): ").trim().toLowerCase();
    if (createNew === 'yes') {
        const newCategory = prompt("Enter the new category name: ");
        if (newCategory) {
            categories.push(newCategory);
            saveCategories(categories);
            selectedCategory = newCategory;
            logging.info(`New category added: ${selectedCategory}`);
        }
    }
}

const purpose = prompt("What is the purpose of this password? ");
logging.info(`Purpose of the password: ${purpose}`);

const prefix = "GHOSTMANIT_";

let numPasswords;
while (true) {
    numPasswords = parseInt(prompt("How many unique passwords would you like to generate? "), 10);
    if (numPasswords > 0) {
        break;
    } else {
        console.log("Please enter a positive number.");
    }
}

for (let i = 0; i < numPasswords; i++) {
    const strongPasswordWithPrefix = generateStrongPassword(prefix);
    console.log(`Generated Unique Password: ${strongPasswordWithPrefix} (Category: ${selectedCategory})`);
}

logging.info("Password generation script finished.");
