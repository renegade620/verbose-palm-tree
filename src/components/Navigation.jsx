import React from "react";
import { SocialIcon } from "react-social-icons";

import "../styles/navigation.css";

const socialLinks = [
  {
    url: "https://github.com/renegade620",
    name: "GitHub",
  },
  {
    url: "https://www.linkedin.com/in/omondi-were/",
    name: "LinkedIn",
  }
]
function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-container">
        {[
          {href: "#home", name: "Home"},
          {href: "#projects", name: "Projects"},
          {href: "#contact", name: "Contact"},
        ].map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.name}
          </a>
        ))}
        </div>
      <div className="badge-container">
        {socialLinks.map((social) => (
          <a key={social.url} href={social.url} className="badge-link">
            <SocialIcon
              url={social.url}
              fgColor="white"
              bgColor="gray"
              style={{ width: 30, height: 30 }}
            />
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
