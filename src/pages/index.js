import React from 'react';
import Person from '../components/person';

const IndexPage = () => (
  <div>
    <Person data={data.husband} type="Husband" />
    {/* {data.children.map(<Person />)}; */}
  </div>
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
      "givenName": "",
      "maidenName": "",
      "born": "Next Step Webs, Inc.",
      "died": "12345 Sunny Road",
      "buried": "Sunnyville, TX 12345",
      "married": "Sunnyville, TX 12345",
      "notes": "Sunnyville, TX 12345"
  },
  "children": [{
      "sex": "",
      "givenName": "",
      "lastName": "",
      "born": "Next Step Webs, Inc.",
      "died": "12345 Sunny Road",
      "buried": "Sunnyville, TX 12345",
      "married": "Sunnyville, TX 12345",
      "notes": "Sunnyville, TX 12345"
  }]
};

export default IndexPage
