import React from 'react';
import Person from '../components/person';

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Family Group Record" />
    <table className="table">
      {Object.keys(data).map(
        (d, idx) =>
        !Array.isArray(data[d]) 
          ? <Person data={data[d]} type={d} key={idx} />
          : data[d].map((child, childIdx) =>
              <Person key={childIdx} data={child} type={'children'} />)
        )}
      </table>
  </Layout>
);

const data = {
  "husband": {
      "givenName": "Chamerlain, Sr",
      "lastName": "Hutson",
      "born": {
        "date":"15 Sep 1779",
        "place": "NC",
      },
      "died": {
        "date":"03 Oct 1858",
        "place": "Benton, IL",
      },
      "buried": {
        "date":"",
        "place": "Browning Hill Cem.",
      },
      "married": {
        "date":"17 May 1802",
        "place": "Logan, KY",
      },
      "notes": "1850 Frlo IL next to Wm A King + Siblings near Burker + Bf. Ramson"
  },
  "wife": {
      "givenName": "Anice/Anis/Annis",
      "maidenName": "Lee",
      "born": {
        "date":"1779/1783",
        "place": "NC",
      },
      "died": {
        "date":"1866",
        "place": "",
      },
      "buried": {
        "date":"",
        "place": "",
      },
      "married": {
        "date":"",
        "place": "",
      },
      "notes": ""
  },
  "children": [{
      "sex": "F",
      "givenName": "Elizabeth",
      "lastName": "Hutson",
      "born": {
        "date":"c 1803/04",
        "place": "TN or IL ⊕ John Sandusky",
      },
      "died": {
        "date":"c 1805",
        "place": "",
      },
      "buried": {
        "date":"",
        "place": "",
      },
      "married": {
        "date":"c 1820/21",
        "place": "",
      },
      "notes": ""
  },{
    "sex": "M",
    "givenName": "Innes",
    "lastName": "Mcclerrin",
    "born": {
      "date":"May 1834",
      "place": "KY",
    },
    "died": {
      "date":"",
      "place": "",
    },
    "buried": {
      "date":"",
      "place": "",
    },
    "married": {
      "date":"1862",
      "place": "",
    },
    "notes": ""
}]
};

export default IndexPage
