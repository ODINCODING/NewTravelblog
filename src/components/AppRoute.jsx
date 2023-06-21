import React from "react";
import { Route, Routes } from "react-router";
import Menubar from "./Menubar";
import Dashboard from "../feature/dashboard/Dashboard";
import Contact from "../feature/contact/Contact";
import PostAdd from "../feature/blog-post/PostAdd";
import PostView from "../feature/blog-post/PostView";

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menubar />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="new-post" element={<PostAdd />}></Route>
          <Route path="view-post/:id" element={<PostView />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoute;
