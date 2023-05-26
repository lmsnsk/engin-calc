import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import store from "./redux/redux-store";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <HashRouter>
//     <React.StrictMode>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </React.StrictMode>
//   </HashRouter>
// );
