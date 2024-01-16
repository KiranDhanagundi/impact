import React from "react";
import Hero from "./Hero";
import PublicLayout from "../../../layouts/PublicLayout";
import FeedBack from "./FeedBack.js";
import Footer from "../../../components/Footer/Footer";
import Globe from "../../../assets/img/globe-bg3.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log("user info", user);
  return (
    <PublicLayout>
      <Hero
        title="Share your ideas with the World..!"
        subtitle="Earn while you sleep"
        image={Globe}
        ctaText="Create your account now"
        ctaLink="/auth/signup"
        user={user}
        dashboard="/app/dashboard"
      />

      <FeedBack />

      <Footer />
    </PublicLayout>
  );
}
