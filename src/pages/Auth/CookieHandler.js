import React from "react";
import Cookies from "js-cookie";

const CookieHandler = () => {
  // Function to set a cookie
  const setCookie = (name, value, options = {}) => {
    Cookies.set(name, value, options);
  };

  // Function to get a cookie
  const getCookie = (name) => {
    return Cookies.get(name);
  };

  // Function to check if a cookie exists
  const checkCookie = (name) => {
    return Cookies.get(name) !== undefined;
  };

  // Function to remove a cookie
  const removeCookie = (name) => {
    Cookies.remove(name);
  };

  return null; // This component doesn't render anything visible to the user
};

export default CookieHandler;
