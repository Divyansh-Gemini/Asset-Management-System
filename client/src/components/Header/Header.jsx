import React from "react";
import Logo from "./Logo";
import Button from "../Button";

const NavBar = () => {
  return (
    <header className="sticky top-0 flex justify-between px-14 py-5 bg-bg items-center text-white">
      <Logo />

      <Button text="Login" href="/login" />
    </header>
  );
};

export default NavBar;
