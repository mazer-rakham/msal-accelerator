# Getting Started with REACT MSAL Accelerator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## This accelerator is a starting point for MSAL, this code will automatically start a Microsoft SSO login process when someone visits the Protected Route, it will also take the URL of the ORIGINAL page and pass it through as a state object so that if there are multiple protected routes, it will keep you on the page that was shared to you like other Microsoft Applications
This Accelerator has NO backend it is a traditional SPA, you will need to create powershell scripts to mount the env vars to a keyvault or another protected source. 



Known issues:

Sometimes React.Strict causes the Auth to insigate multiple times, can just delete strict mode if this happens to you.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Authentication Setup

This project uses Microsoft Authentication Library (MSAL) for handling user authentication. Below are the key files involved:

- `src/Utils/Config/authConfig.ts`: Contains the configuration for MSAL, including the client ID, authority, and redirect URI from environment variables. It initializes the `PublicClientApplication` used throughout the app.

- `src/Utils/AuthState/AuthProvider.tsx`: Provides a React context for authentication state. It uses the MSAL hook `useMsal` to manage authentication status and provides a context to consume in other components.

- `src/Utils/AuthState/ProtectedRoute.tsx`: A component that wraps around routes that require authentication. It checks if the user is authenticated and redirects to a login page if not.

Ensure that you have the necessary environment variables set in your `.env` file for the authentication to work correctly:

```
REACT_APP_CLIENT_ID=your_client_id_here
REACT_APP_AUTHORITY=your_authority_url_here
REACT_APP_REDIRECT_URI=http://localhost:3000/redirect
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
