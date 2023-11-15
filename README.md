## Welcome to the Drink Recipe Application's README 🍻

### Introduction

This project aims to create a comprehensive drink recipe application that allows users to manage and explore various drinks. The application encompasses three distinct user groups: Admin Users, API Users, and Guest Users, each with tailored functionalities.

### User Roles and Functionalities

#### Admin Users

Admin users hold the highest level of access and possess the ability to:

- CRUD (Create, Read, Update, Delete) all entities within the application, including categories, ingredients, glasses, and drinks.
- Upload images for categories, storing them in the server's public directory.
- Edit drink details, including name, description, recipe, categories, ingredients, glasses, and image.
- Manage their profile, including viewing and updating personal information.
- Access all application features through the dashboard.

#### API Users

API users enjoy a unique role, granting them access to the application's API for third-party integration. They can:

- Register and log in to the application.
- Edit their profile, excluding password and email.
- Obtain their API keys upon registration and login.
- Access all read endpoints of the API, utilizing their API keys.

#### Guest Users

Guest users, without the need to register or log in, can:

- Explore a wide range of drink recipes.
- Filter drinks by categories, ingredients, and glasses.
- Utilize the search bar to locate drinks by name.
- Access all functionalities from the homepage.

### Application Design and Navigation

The application adheres to a consistent and intuitive design philosophy:

- The homepage provides clear links to the login and register pages.
- Login and register pages share a similar layout, differing only in their main content.
- The dashboard, encompassing profile, drinks, categories, ingredients, and glasses pages, adheres to a unified layout and design.
- Easy navigation between dashboard pages is facilitated through visible links.
- A dedicated logout button ensures a seamless user experience.

### Technology Stack

The application is built upon a robust technology stack:

- Backend: Node.js, Express.js, SQL, Sequelize
- Frontend: React.js, Valtio, Typescript

### Project Roadmap

The project's roadmap envisions continuous development and enhancement:

- Implement a notification system for Admin Users to receive alerts regarding user actions.
- Introduce a recommendation system to suggest drinks based on user preferences.
- Develop a mobile application to extend the user experience to mobile devices.
- Integrate social media sharing capabilities to encourage user engagement.

### Contribution Guidelines

For those interested in contributing to the project, please follow these guidelines:

- Create an issue outlining your proposed contribution.
- Fork the repository and implement your changes.
- Submit a pull request with a detailed description of your changes.
- Engage in code reviews and discussions to ensure the project's quality.

### Conclusion

This drink recipe application aims to provide a comprehensive and user-friendly platform for managing and exploring a vast collection of drink recipes. With its robust functionalities, intuitive design, and continuous development, the application caters to a diverse range of users, from casual drink enthusiasts to professional mixologists.