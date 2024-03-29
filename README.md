# CountryFinderApp


CountryFinder is a web application that allows users to easily find information about countries around the world. It provides a user-friendly interface to search for countries and access various details and data related to each country.

## Features

- Search: Users can search for countries by name.
- Country Details: Each country's page displays information such as population, languages spoken, and currency,
Flag, Native Name,Region,Sub Region,Capital,Top Level,Domain,Currencies,Border Countries

- Regional Filtering: Users can filter countries by regions such as Africa, Asia, Europe, etc.
- Mobile-Friendly: The app is responsive and optimized for a seamless experience on mobile devices.

## Technologies Used

- Front-end: HTML, CSS (Tailwind CSS), TypeScript, React.js
- Data Source: RESTful API (e.g., REST Countries API)

## Folder Structure adopted
src
├── components
│   ├── Header
│   │   ├── Header.js
│   │   ├── Header.css
│   │   └── Header.test.js
│   ├── Footer
│   │   ├── Footer.js
│   │   ├── Footer.css
│   │   └── Footer.test.js
│   └── ...
├── pages
│   ├── Home
│   │   ├── Home.js
│   │   ├── Home.css
│   │   └── Home.test.js
│   ├── About
│   │   ├── About.js
│   │   ├── About.css
│   │   └── About.test.js
│   └── ...
├── utils
│   ├── api.js
│   ├── helper.js
│   └── ...
├── App.js
├── App.css
└── index.js

## The componentsdirectory:
contains reusable UI components. Each component has its own folder,
with the component file (e.g., Header.js), corresponding styles (e.g., Header.css), and any related tests (e.g., Header.test.js).
## The pages directory :
contains page-specific components. Each page has its own folder, with the page component file, styles, and tests.
## The utils directory:
houses utility functions, helper modules, or API-related files that are used across the app.
## The App.js file :
serves as the main entry point for the application, where the overall layout and routing are typically defined.
The index.js file is responsible for rendering the app and mounting it to the DOM.



## Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up environment variables, if necessary.
4. Start the development server: `npm start`

Make sure you have Node.js and npm installed on your machine.

## Usage

1. Visit the app in your web browser.
2. Enter the country name or select criteria to search for specific countries.
3. Click on a country to view detailed information, including flag etc.
4. Explore different regions and filter countries based on preferences.

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or new features to add, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-new-feature`
3. Make changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

Please ensure that your code adheres to the project's coding conventions and includes appropriate documentation.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [REST Countries API](https://restcountries.com/#rest-countries) for providing country data.
- [Tailwind CSS](https://tailwindcss.com) for the responsive and utility-first CSS framework.

## Contact

For any inquiries or feedback, please contact the project team at (francis.fuwaku@amalitech.org).

