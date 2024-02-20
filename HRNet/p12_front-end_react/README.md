# WEALTH HEALTH - Janvier 2024
## Projet 14 - Faites passer une librairie jQuery vers React. ![Static Badge](https://img.shields.io/badge/Openclassrooms-8A2BE2)

### Author : 
##### Léo Timbert (student).

### Technologies :
![Static Badge](https://img.shields.io/badge/Made%20with-Javascript-green)

![Static Badge](https://img.shields.io/badge/react%2018.2.0-blue)

![Static Badge](https://img.shields.io/badge/redux%205.0.1-lightblue)

### Environment :
![Static Badge](https://img.shields.io/badge/Github-lightgrey) : https://github.com/leo2325/P12_Front-end_React/tree/main/HRNet
![Static Badge](https://img.shields.io/badge/recommended%20editor-VS%20Code-white)

### Installation
#### Prerequisites
![Static Badge](https://img.shields.io/badge/npm-v%209.5.0-white)


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




















### EmployeesList.json

### Les différents composants

### Create Employee Form

Le formulaire contient les différents input à remplir pour l'inscription.

### Current employees Array

### Search Bar


#### Fonctions : 

onSubmit()
    -vérification que les input ont bien été renseigné : 
        si non : message d'erreur
        si oui : createNewEmployee() , affichage d'une modale de confirmation.
            à la fermeture de cette modale : redirection vers CurrentEmployeeArray.

createNewEmployee()
    -mis à jour du state de EmployeesList.json (ajout d'un nouvel employé à la liste)
    -mis à jour du state de CurrentEmployeeArray (affichage du composant regénéré)


sortEmployee() 
    -appliquée au composant CurrentEmployeeArray <th>
        -selon le <th> cliqué (par string ou number)
        -l'icône change selon le tri

searchEmployee()
    Fonction de recherche d'un employé.
    -> Appliqué à la barre de recherche
    -> Agit sur CurrentEmployeeArray
        -les employés visible doivent contenir 