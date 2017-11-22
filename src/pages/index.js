import Img from "gatsby-image";
import Link from "gatsby-link";
import React from "react";

const IndexPage = ({ data }) => (
  <div>
    <h3>Welcome to your new Gatsby site.</h3>
    <hr />
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
      }}
    >
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
  }
`;
