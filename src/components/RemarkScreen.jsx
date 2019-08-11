import React from "react";
import Link from "gatsby-link";
import Obfuscate from "react-obfuscate";
import { FaBook, FaWrench } from "react-icons/lib/fa";

const ForHomePageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>I'm glad</b>
      <br /> that you're interested in my work.
    </p>
    <p>
      There's something I want you to remember while you're going over the
      website.
    </p>
    <p>
      Currently, I'm open to <b>full time job</b> offers.
    </p>
    <p>
      If you believe I would be a good fit, drop me a message at{" "}
      <b>
        <Obfuscate email="aaron@urbanrisedesigns.com" />
      </b>
      .
    </p>
    <p>Thank you. Now, you're free to go further.</p>
  </div>
);

const ForContactPageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>Hi there</b>
      <br /> Before you leave
    </p>
    <p>
      I want you to remember that currently, I am open to <b>full time job</b>{" "}
      offers.
    </p>
    <p>
      If you feel that I would be qualified, drop me a message at{" "}
      <b>
        <Obfuscate email="aaron@urbanrisedesigns.com" />
      </b>
      .
    </p>
    <p />
    <p>
      Thank you
      <br />
      <b>Aaron</b>
    </p>
  </div>
);

const RemarkScreen = props => {
  const links = [
    { path: "toolbox", icon: FaWrench }
    // { path: "blog", icon: FaPaperPlaneO }
  ];

  return (
    <div
      className={`c-remark-screen ${props.isActive &&
        "c-remark-screen--is-active"}`}
    >
      {props.locationPathName === "/"
        ? ForHomePageContent
        : ForContactPageContent}
      {props.locationPathName === "/" && (
        <div className="c-remark-screen__links">
          {links.map(link => (
            <Link
              key={link.path}
              className="c-remark-screen__link"
              to={`/${link.path}/`}
              onClick={props.onClick}
              tabIndex={props.isActive ? "1" : "-1"}
            >
              <link.icon /> {link.path}
            </Link>
          ))}
          <a
            href="https://blog.aaroncuddeback.com"
            className="c-remark-screen__links"
          >
            <span className="c-remark-screen__link">
              <FaBook />
              Blog
            </span>
          </a>
        </div>
      )}
      {/* <div className="c-remark-screen__links" /> */}
    </div>
  );
};

export default RemarkScreen;
