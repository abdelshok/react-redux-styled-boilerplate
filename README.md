# ⚔️ CPI Internal Tool 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and extended with a number of basic frameworks & technologies


## Technologies 🛠

The main technologies used throughout this project are: 

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Styled-Components](https://styled-components.com/)
* [React-Router](https://reactrouter.com/)
* [Axios](https://github.com/axios/axios)

## Folder Structure 📖

The folder structure of this boilerplate was originally going to follow a [container / component architecture](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.4rmjqneiw). 

**containers/** contains React components which are connected to the redux store, which will be the single source of truth for the data on the platform.

**components/** contain dumb React components, which depend on the aforementioned containers for data. 

This has been restructured into following a [feature first / type second architecture](https://stackoverflow.com/questions/42987939/styled-components-organization), which will scale better in the long run. Files are not separated by type (CSS vs. JS, etc.) but in terms of functionality. This allows for a faster movemenet between different files & increased clarity as the project evolves. In turn, duplicate components that provide the same functionality in multiple areas will be moved into the `/shared` folder. 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Comments

None for now.
