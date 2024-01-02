import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "../components/Browse";
import Login from "./../components/Login";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
