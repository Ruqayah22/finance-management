import React from "react";
import Bottombar from "../components/Bottombar";
import SearchAppBar from "../components/Navbar";
import backgroundImage from "../images/background.png";
import SocialFollow from "../components/SocialFollow";
import Textbody from "../components/Textbody";

function Homepage() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "100%",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SearchAppBar />
      <main
        style={{
          minHeight: "25%",
        }}
      ></main>
      <SocialFollow />
      <Textbody />
      <Bottombar />
    </div>
  );
}

export default Homepage;
