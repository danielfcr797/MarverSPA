import React from "react";
import {
  BrowserRouter as ReactRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import App from "../App";
import HomeContainer from "../containers/home";

const Router = () => {
  return (
    <ReactRouter>
        <App>
            <Routes>
                <Route path="/home" element={<HomeContainer />} />
                <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
        </App>
    </ReactRouter>
  );
};

export default Router;
