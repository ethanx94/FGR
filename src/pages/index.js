import React from 'react';
import { graphql } from "gatsby"

import Person from '../components/person';
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { github: { viewer: { gist: { files } } } } = data;
  const newData = JSON.parse(files[0].text);
  return (
  <Layout>
    <SEO title="Family Group Record" />
    <table className="table">
      {Object.keys(newData).map(
        (d, idx) =>
        !Array.isArray(newData[d]) 
          ? <Person data={newData[d]} type={d} key={idx} />
          : newData[d].map((child, childIdx) =>
              <Person key={childIdx} data={child} type={'children'} />)
        )}
      </table>
  </Layout>
)};

export const query = graphql`
  query IndexPageQuery {
    github {
      viewer { 
        gist (name: "e48b904900f674cf529876b39af26677") {
          files {
            name
            text
          }
        } 
      }
    }
  }
`

export default IndexPage
