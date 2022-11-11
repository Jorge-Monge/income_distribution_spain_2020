## Project consuming an ArcGIS REST Service, with React, Leaflet and ArcGIS JS

### Objectives

- Display the polygons, styled by a variable
- Display polygon information upon click events
- Allow the user to select a different variable to map

### Steps

- #### Setup

  - Use create-react-app to initialize a React app with NPM in the current folder
    > > npm create-react-app .
  - Install the leaflet package
    > > npm install leaflet
  - Install React Leaflet
    > > npm install react-leaflet
  - Install React Esri Leaflet (https://github.com/slutske22/react-esri-leaflet)
    > > npm install react-esri-leaflet
  - In public/index.html, import the Leaflet, and Esri Leaflet CSS and JS modules.
  - Add the basic Leaflet React and Esri Leaflet React components to App.js
  - Install dependencies for Esri Leaflet Vector
    > > npm install esri-leaflet-vector
