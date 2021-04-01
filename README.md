[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">SDE - Frontend (Intern) Hiring Challange</h3>

  <p align="center">
    An assignment for Board Infinity SDE - Frontend (Intern) Hiring Challange
    <br />
    <a href="https://github.com/vaidikkamde/board-infinity-frontend.git"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://board-infinity-frontend.vercel.app/dashboard">Vercel Hosted Demo</a>
  </p>
</p>
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)
<br/>
This app uses [SpotifyAPI](https://developer.spotify.com/) to search for artists albums and playlist for the search query entered by the user. React-Redux is being used to manange app state and storing data fetched from the API.

We authorize the app using the Oauth2 provided by spotify and store the access token in the localstorage using the following code lines
```js
const handleLogin = () => {
  window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
};
```
We run the function when the user clicks "Login To Spotify" button on the homepage.
If user is authenticated they will be redirected to the dashboard page else they will be redirected to the home page and will be shown the error message. This functionality is provided by RedirectPage.jsx .

On the dashboard page user can give a text input to search for the albums artists and playlist. On clicking search the redux-reducer present in reducers folders will add the relevent result to the redux store.

On successful execution the loading flag is set to false and the results are shown to the user in a mosiac pattern.

The access token is valid for 3600 seconds or 1 hour after which the user is prompted again to login and authenticate.
### Built With
This project is build using:
* [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
* [axios](https://www.npmjs.com/package/axios)
* [redux](https://www.npmjs.com/package/redux)
* [react-redux](https://www.npmjs.com/package/react-redux)
* [redux-thunk](https://www.npmjs.com/package/redux-thunk)
* [lodash](https://www.npmjs.com/package/lodash)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

You will need the latest LTS version of [Node](https://nodejs.org/en/download/) and NPM
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Create the account at [https://developer.spotify.com/dashboard/login](https://developer.spotify.com/dashboard/login) . Click login and login using your spotify account.

2.  Click on "Create An App" and enter the app name and description and then click on the "CREATE" button.

3. Take note of the Client ID.

4. Clone the repo
   ```sh
   git clone https://github.com/vaidikkamde/board-infinity-frontend.git
   ```
5. Change Directory to board-infinity-frontend
    ```sh
    cd board-infinity-frontend
    ```
6. Install NPM packages
   ```sh
   npm install
   ```
7. Create a .env file in the root of the project and add the following details in it:
    ```env
    REACT_APP_CLIENT_ID=your_client_id
    REACT_APP_AUTHORIZE_URL=https://accounts.spotify.com/authorize
    REACT_APP_REDIRECT_URL=http://localhost:3000/redirect
    ```



<!-- USAGE EXAMPLES -->
## Usage

After the installation run
   ```sh
   npm start
   ```
This will launch the app at [http://localhost:3000/](http://localhost:3000/)
<!-- CONTACT -->
## Contact

Vaidik Kamde - [@vaidik_kamde.jsx](https://www.instagram.com/vaidik_kamde.jsx/) - vaidik16206138@gmail.com

Project Link: [https://github.com/vaidikkamde/board-infinity-frontend.git](https://github.com/vaidikkamde/board-infinity-frontend.git)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Best-README-Template by @othneildrew](https://github.com/othneildrew/Best-README-Template.git)
* [React Redux Tutorial by Codevolution](https://youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK)


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/vaidik-kamde
[product-screenshot]: src/images/screenshot2.png
