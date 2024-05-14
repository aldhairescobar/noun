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
import SignUp from "./pages/SignUp";
import "./global-styles.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<SignUp />} errorElement={<NotFound />} />
      <Route path="/" element={<App />}>
        <Route path="explore" element={<BookIndex />} />
        <Route path="to-read" element={<ToRead />} />
        <Route path="reading" element={<Reading />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
