This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Project Structure
```$xslt
react-boilerplate/
    config/
    public/ 
    scripts/
    src/
        __tests__/ (directory for all project tests, 
                    this directory should be in src otherwise you should change webpack configurations)
            e2e/ (directory for End-To-End test)
            unit/
                store/ (directory for store unit test only)
        assets/
            _images/
            _styles/
                abstracts/  (stylesheets for variables, fonts, mixins etc.)
                base/ (base stylesheets e.g. baseInputs, baseDropdowns etc.)
                componenets/ (stylesheets for separate components)
                layout/ (layout stylesheets e.g. header, footer etc.)
                pages/ (stylesheets for components with routes)
                vendors/ (stylesheets for 3rd party scss(css))
            
                NOTE: If some of the directories getting bigger just 
                      create a separate stylesheet import styles to that stylesheet
                      and then import to main.scss file
                main.scss
                shame.scss (stylesheet for quick fixes, hacks and questionable techniques)
        components/
            common/ (uncategorised components)
            layout/ (layout components e.g. header, footer etc.)
            sections/ (components that can be part of a routed component)
            ui/ (reusable components across the whole app e.g. modals, banners etc.)
        config/
            constansts.js    
        services/
            actions/ (actions make requests and set data to store)
            helpers/
            managers/ (directory for managers e.g. request, cookie, token etc.)
            stores/ (mobx stores each store is like a module)
                
                NOTE: DON`T make requests from store for making requests use actions directory 
                      by doing so you will make store lighter.
                /index.js (All stores(modules) are imported here)
            /router.js
        views/ (components that are routed)
        App.test.js
        index.js
        serviceWorker.js
    .env (project environment variables NOTE: .env file is ignored)   
    .env.example (project environment variables example)
    .eslintignore (file to ignore direcotries or files eslint rules)
    .eslintrc (esLint config file)
    .gitignore
    .prettierrc (prettier config file)
    package.json
    package-lock.json
    README.md
```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
