import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./scss/app.scss"
import Store from "./State/Store.jsx"
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
)
