import Img from "gatsby-image";
import Link from "gatsby-link";
import React from "react";

const IndexPage = ({ data }) => (
  <div>
    <h2>Test de GatsbyJS</h2>
    <hr />
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
      }}
    >
      <p className="uk-text-lead uk-text-primary uk-width-1-1">
        Liste des produits :
      </p>
      {data.allContentfulProduct.edges.map(({ node }, i) => (
        <div
          key={i}
          style={{
            padding: ".75rem",
            border: "1px solid #ccc",
            maxWidth: "250px",
            textAlign: "center",
            fontSize: ".75rem",
            fontWeight: "bold",
            verticalAlign: "top"
          }}
        >
          <Img key={i} resolutions={node.image[0].resolutions} />
          <hr />
          <span style={{ textAlign: "center", verticalAlign: "super" }}>
            {node.productName.productName}
          </span>
        </div>
      ))}
    </div>
    <hr />
    <div className="uk-margin-top">
      <p className="uk-text-lead uk-text-primary uk-width-1-1">
        Liste des marques :
      </p>
      {data.allContentfulBrand.edges.map(({ node }, i) => (
        <div key={i} className="uk-margin-bottom">
          <span className="uk-text-bold">{node.companyName.companyName}</span>
          <div>
            <p className="uk-margin-small-top">
              {node.companyDescription.companyDescription}
            </p>
            <Img
              resolutions={node.logo.resolutions}
              outerWrapperClassName="uk-inline-block"
            />
          </div>
          <p>
            <a target="_blank" href={node.website}>
              {node.website}
            </a>
          </p>
        </div>
      ))}
    </div>
    <hr />
    <div className="uk-margin-top">
      <p className="uk-text-lead uk-text-primary uk-width-1-1">
        Liste des catégories :
      </p>
      {data.allContentfulCategory.edges.map(({ node }, i) => (
        <div key={i} className="uk-margin-bottom uk-width-1-2 uk-inline-block">
          <span className="uk-text-bold">{node.title.title}</span>
          <p className="uk-margin-small-top">
            {node.categoryDescription.categoryDescription}
          </p>
          <Img resolutions={node.icon.resolutions} />
        </div>
      ))}
    </div>
  </div>
);

export default IndexPage;

export const query = graphql`
  query getProducts {
    allContentfulProduct {
      edges {
        node {
          productName {
            productName
          }
          image {
            resolutions(width: 175, height: 175) {
              width
              height
              src
              ...GatsbyContentfulResolutions
            }
          }
        }
      }
    }
    allContentfulBrand {
      edges {
        node {
          companyName {
            companyName
          }
          companyDescription {
            companyDescription
          }
          logo {
            resolutions(width: 150) {
              width
              height
              src
            }
          }
          website
        }
      }
    }
    allContentfulCategory {
      edges {
        node {
          title {
            title
          }
          categoryDescription {
            categoryDescription
          }
          icon {
            resolutions(width: 100) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`;
