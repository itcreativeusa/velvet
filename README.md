# velvet

## Description

Deployed application link on GitHub
https://github.com/itcreativeusa/velvet

Deployed application link on Heroku
https://velvet-app-2e3e4b4e1b47.herokuapp.com/

Velvet is an eCommerce platform specializing in clothing, where garments are organized by colors. This allows users to select from a list of colors, which then displays related clothing items in those chosen colors. Users can add or remove selected items to/from their shopping cart. When ready, they can proceed to checkout using the Stripe payment gateway.

## Table of Contents

- [Installation](#installation)
- [Technologies used](#technologies-used)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [License](#license)

## Installation

On local machine run the following commands:
"npm install" to install all dependencies
"npm run seed" to seed the database
"npm run develop" to start the server

## Technologies Used

**Front-End:**

- React

**Back-End:**

- GraphQL
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- Stripe API

**Functionality:**

- Queries and Mutations (for data retrieval, addition, updating, and deletion)
- Authentication (JWT)

**Deployment and Hosting:**

- Heroku
- MongoDB Atlas

**Security:**

- Protection of sensitive API key information on the server

## Usage

**Browsing and Selecting:**

Visit the Velvet website.
Browse through a variety of clothing items organized by colors.
Choose from a list of available colors to see related clothing items.

**Adding to Cart:**

Find a clothing item you like in a specific color.
Click on the item to view more details.
Decide to purchase it and click the "Add to Cart" button.
The selected item is now added to your shopping cart.

**Managing Cart:**

Access your shopping cart to review the items you've selected.
Adjust quantities or remove items if needed.

**Checkout:**

Once you're satisfied with your selections, proceed to checkout.
You will be prompted to provide your information for the purchase.
Choose the Stripe payment option for secure and easy payment processing.

**Authentication:**

If you're a registered user, you can log in using your credentials.
If not, you'll need to create an account.
Authentication is secured using JWT (JSON Web Tokens).

**Data Retrieval and Modification:**

Behind the scenes, the platform uses GraphQL queries and mutations to retrieve, add, update, and delete data.
This ensures efficient and precise interactions with the database.

**Deployment and Hosting:**

Velvet is hosted on Heroku, providing reliable access to the platform.
Security Measures:

Your sensitive API key information is protected on the server, ensuring the security of your transactions and personal data.

## Screenshots

Screenshots located in `img/` folder
![main page](img/screenshot.png)
![categories](img/screenshot1.png)
![product](img/screenshot3.png)
![login](img/screenshot4.png)

## Credits

Some code for this project was taken from Mini-Project provided by Berkeley Bootcamp for studying purposes.

## License

Please refer to the LICENSE in the repo.
