import {
  Configuration,
  EndSessionRequest,
  RedirectRequest,
  PublicClientApplication
} from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID!,
    authority: process.env.REACT_APP_AUTHORITY,
    redirectUri: process.env.REACT_APP_REDIRECT_URI!,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
    secureCookies: false,
  },
};

// Initialize MSAL instance
export const msalInstance = new PublicClientApplication(msalConfig);

// Function to generate a state parameter
// Function to generate a state parameter with the original URL
const generateStateParameter = (originalUrl: string) => {
  return btoa(JSON.stringify({ originalUrl, timestamp: Date.now() }));
};


// Adjust the function to return RedirectRequest or the appropriate type
export const loginRequest = (originalUrl: string): RedirectRequest => {
  return {
    scopes: ["User.Read"],
    state: generateStateParameter(originalUrl),
    redirectUri: process.env.REACT_APP_FIXED_REDIRECT_URI!,
  };
};

// Logout function
export const logout = (logoutRequest?: EndSessionRequest) => {
  msalInstance.logoutRedirect(logoutRequest).catch((e) => {
    console.error(e);
  });
};