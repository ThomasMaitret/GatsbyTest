import Link from "gatsby-link";
import React from "react";

const SecondPage = ({ data }) => (
  <div>
    <h3>{data.allContentfulBlogPost.edges[0].node.title}</h3>
    <hr />
    <p>{data.allContentfulBlogPost.edges[0].node.content.content}</p>
  </div>
);

export default SecondPage;

export const query = graphql`
  query getBlogPost {
    allContentfulBlogPost {
      edges {
        node {
          title
          content {
            content
          }
        }
      }
    }
  }
`;
