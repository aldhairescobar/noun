import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./components/App";
import BookIndex from "./pages/BookIndex";
import ToRead from "./pages/ToRead";
import Reading from "./pages/Reading";
import NotFound from "./pages/NotFound";
import "./global-styles.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<NotFound />}>
      <Route index element={<BookIndex />} />
      <Route path="to-read" element={<ToRead />} />
      <Route path="reading" element={<Reading />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
