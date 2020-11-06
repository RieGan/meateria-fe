import React from "react";
import NavBar from "components/Navbar/Navbar";
import NavbarTabMenu from "components/Navbar/NavbarTabMenu";
import Highlight from "components/Highlight/Highlight";
import Items from "components/Item/Items";
import Footer from "components/Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <NavbarTabMenu />
      <Highlight />
      <Items />
      <Footer />
    </>
  );
}
