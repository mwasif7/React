import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const ReactElement = React.createElement("a", {
  href: "https://www.google.com/",
  target: '_blank'
}, 'Click here to go to google from create react element');

ReactDOM.createRoot(document.getElementById("root")).render(

    ReactElement
  
);
