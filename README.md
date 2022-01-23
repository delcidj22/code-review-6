# Code Review 6 (Currency Exchange API)

## by _**Jonathan Delcid**_

### _January 14, 2022_

#### _In this website, a user is able to find the currency exchange of multiple countries around the world_

## Technologies Used
- _Babel 7.6.4_
- _Bootstrap 5.1.3_
- _CSS_
- _css-loader 3.2.0_
- _eslint 6.3.0_
- _eslint-loader 3.0.0_
- _file-loader 1.1.6_
- _html-loader 0.5.5_
- _HTML_
- _package-json_
- _Javascript_
- _Jest 24.9.0_
- _JQuery 3.6.0_
- _Node.js_
- _Node Package Manager 6.14.9_
- _popper.js 1.16.1_
- _style-loader 1.0.0_
- _webpack 4.39.3_
- _webpack-cli 3.3.8_
- _webpack-dev-server 3.8.0_

## Project Title: Currency Exchange API Search

## API Key Procurement:
- _This application uses the Currency Exchange API. You will need to make an account and get an API key if you wish to recreate the project environment on your local._

- _Visit https://www.exchangerate-api.com/ site._

- _Navigate to the site to get a free key. Note that while the "Open Access" plan doesn't require an API key, it is heavily rate limited. You are expected to get an API key through the "Free Plan" - (and to protect that key in your application using environmental variables)._

- _Click the "Create Free Key!" button._

## Project Setup/Installation Instructions:
- _Open the terminal on your local computer._

- _Navigate to the parent directory of your preference._

- _Clone this project using ```$ git clone https://github.com/delcidj22/code-review-6```_

- _Navigate to the top level of the directory with the command ```$ cd code-review-6```_

- _Make sure you have installed [Node js](https://nodejs.org/en/)_

- _Run command ``` $ npm install``` to install all dependencies._

- _Create file for storing environmental variables you want to keep secret (such as an API key) ``` $ touch .env```_

- _Add the following line of code to the .env file ```API_KEY=insert-your-API-key-here``` where you substitute the API key you got by following the instructions above for the "insert-your-API-key-here". The following is an example using a fake API key: ```API_KEY=1234567890```_

- _Run the command ```$ npm run build```_

- _Run the command ```$ npm run test``` to check the test pass._

- _Run the command ```$ npm run start``` to launch on a browser._

## Additional Setup/Installation Note for Windows Users
- _This environment was created on a Mac. For it to work properly in your local environment make the following change:_

- _Update package.json, line 8 to: "start": "npm run build & webpack-dev-server --open --mode development"_

## Known Bugs
- _When API is in .env, it does not work but when the API is in the URL, it works._

_

## License
[MIT License](https://opensource.org/licenses/MIT) Published _**2022**_ _**Jonathan Declid**_

## Contact Information
_If you encounter any issues with this site, please contact Jonathan Delcid at [jdelcid23@gmail.com]_
Copyright (c) _01/14/2022_ _Jonathan Delcid_