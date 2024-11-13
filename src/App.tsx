import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
// import Login from "./pages/admin/login/Login";
import TestLogin from "./pages/admin/login/TestLogin";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import CreateArticle from "./pages/admin/dashboard/CreateArticle";
import ManageArticles from "./pages/admin/dashboard/ManageArticles";
import { HashRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    // <Router>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<TestLogin />} />
        {/* <Route path="/admin/login" element={<Login />} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/create-article" element={<CreateArticle />} />
        <Route path="/admin/manage-articles" element={<ManageArticles />} />
      </Routes>
    </HashRouter>
    // </Router>
  );
};

export default App;
