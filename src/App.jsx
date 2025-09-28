import React from "react";
import Navbar from "./components/Navbar";

import { Routes, Route, RouterProvider } from "react-router-dom";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import ContactLayout from "./layout/ContactLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/NotFound";

import Jobs from "./pages/Jobs";
import JobsLayout from "./layout/JobsLayout";
import { jobsLoader } from "./loaders/jobLoader";
import JobDetails from "./components/JobDetails";
import { jobDetailsLoader } from "./loaders/jobDetailsLoader";
import Error from "./components/Error";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="contactInfo" element={<ContactInfo />} />
          <Route path="contactForm" element={<ContactForm />} />
        </Route>

        <Route path="jobs" element={<JobsLayout />} errorElement={<Error />}>
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route
            path=":id"
            element={<JobDetails />}
            loader={jobDetailsLoader}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
    // <div>
    //   <Navbar />
    //   <div className="container">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/products" element={<Products />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </div>
    // </div>
  );
};

export default App;
