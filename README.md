# Immersive-Product-Display
XR/AR Shopify Theme App Extension Boilerplate for local development of Node.js Shopify App. The code is boilerplate code for development only settings (see [details](https://github.com/Shopify/shopify-node-api/blob/main/docs/issues.md)).

This app allows stores to add a custom "Immersive Product Display" to their store. The display takes a specified products collection, and for each product with an uploaded 3D-model, displays an XR/AR product viewer. 

## Set up

### Create Shopify Local Development App
Follow this [tutorial](https://shopify.dev/apps/getting-started/create#step-4-install-your-app-on-your-development-store) to create a Shopify App using ngrok and install it on a devlepment store.

### Register a Them App Extension
Using the created app, follow this next [tutorial](https://shopify.dev/apps/online-store/theme-app-extensions/getting-started#scaffold-and-register-a-theme-app-extension) to create and register a Theme App Extension for the app.

### Replace 'pages' and 'theme-app-extension' folders
Download, this repository. Then, in the created app, replace the 'pages' and 'theme-app-extension' folders with this repository's two folders of the same name. 

### Push The 'theme-app-extension' folder
Within the folder, enter: "shopify extension push".
The app should be up and running now.