import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import theme_pattern from "../../assets/theme_pattern.svg";
import { useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  };
  return (
    <div className="navbar">
      <div className="title-box">
        <h1>ShweTA</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home" offset={100}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#education">
            <p onClick={() => setMenu("education")}>Education</p>
          </AnchorLink>
          {menu === "education" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio">
            <p onClick={() => setMenu("Portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "Portfolio" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#certifications"
          >
            <p onClick={() => setMenu("Certifications")}>My Certifications</p>
          </AnchorLink>
          {menu === "Certifications" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
