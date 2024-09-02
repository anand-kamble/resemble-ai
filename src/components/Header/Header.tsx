import React from "react";
import "./Header.css";
import { redirect } from "react-router-dom";

interface LinkProps {
  title: string;
  url: string;
}

const links: LinkProps[] = [
    {
      title: "new",
      url: "/new",
    },
    {
      title: "past",
      url: "/past",
    },
    {
      title: "comments",
      url: "/comments",
    },
    {
      title: "ask",
      url: "/ask",
    },
    {
      title: "show",
      url: "/show",
    },
    {
      title: "jobs",
      url: "/jobs",
    },
    {
      title: "submit",
      url: "/submit",
    },
  ];
  

const Link = ({ title, url }: LinkProps) => {
  return <a className="header_links" href={url}>{title}</a>;
};



const Header = () => {
  return (
    <div className="Header">
      <div className="logo" onClick={() => redirect("/")}>Y</div>
      <strong>Hacker News</strong>

      {
        /** I should be using keys which are unique ID's, but for this case url are sufficient. */
        links.map((l,i) => (
          <span>
            {i==0 ? "" : "|"}
            <Link title={l.title} url={l.url} key={l.url} />{" "}
          </span>
        ))
      }
    </div>
  );
};

export default Header;
