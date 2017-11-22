import "./index.css";

import Helmet from "react-helmet";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

const Header = () => (
  <div
    style={{
      background: "navy",
      marginBottom: "1.75rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: ".5rem",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)"
      }}
    >
      <h1 className="uk-inline-block uk-margin-remove">
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            verticalAlign: "text-top"
          }}
        >
          Gatsby
        </Link>
      </h1>
      <nav className="uk-inline-block uk-padding-small">
        <ul className="uk-text-right uk-margin-remove-bottom uk-light">
          <li className="uk-inline-block, uk-margin-right">
            <Link to="/">Accueil</Link>
          </li>
          <li className="uk-inline-block">
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
