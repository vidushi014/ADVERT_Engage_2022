# ADVERT - Mincrosoft engage 2022
  ADVERT categorizes ads based on age, gender, and emotions by recognizing the user’s facial features (using Face Recognition) to deliver an ad that can resonate with each unique customer.


## Features
1. 	Ads are classified based on age and gender of the customers to make it more relatable for the user.
2.	Facial expressions of the customer are used to generate the feedback of the ad.
3.	Provides an additional feature to sign in to your account using face recognition.
4.	Responsive UI.
5.	Blog page where in you can see it's real time application 
---
## Tech Stack used
-	**React** – Used create react app template with ReactJS framework to build the frontend.
-	**BootStrap** - Used bootstrap to customize and style my react app.
-	**Material UI** – Used ready-made components to ease the development process.
-	**Azure API** – Integrated Azure cognitive services’ face API with my react app.
---
## Azure API used
ADVERT uses the Azure Face service provides AI algorithms that detect, recognize, and analyze human faces in images for creating RealTime communication applications. 
> There were few attributes/features which can be detected by Face – Detect API. The following detected attributes I have used in my application:
>- ***Age.*** The estimated age in years of a particular face.
>- ***Emotion.*** A list of emotions with their detection confidence for the given face. Confidence scores are normalized, and the scores across all emotions add up to one. The emotions returned are happiness, sadness, neutral, anger, contempt, disgust, surprise, and fear.
>- ***Gender.*** The estimated gender of the given face. Possible values are male, female, and genderless.
>- ***Smile.*** The smile expression of the given face. This value is between zero for no smile and one for a clear smile.
For more details refer to [Project Documentation](https://docs.microsoft.com/en-us/azure/cognitive-services/face/concepts/face-detection).
---
## Installation
In the project directory, run `npm install` to install all the dependencis. then run `npm start` to run the application on localhost. Use `npm run build` to create a production build (in **\build** folder) for deployment.
### Dependencies
ADVERT runs on **Node js** and uses **React JS** for front end and
Following the dependencies used by Shop24x7 :
- @emotion/react
- @emotion/styled
- @mui/icons-material
- @mui/material
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- axios
- react
- react-dom
- react-firebase-hooks
- react-router-dom
- react-scripts
- react-webcam
- web-vitals

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
