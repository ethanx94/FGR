import React from 'react'
import Link from 'gatsby-link'

const Person = ({ data: {
  givenName,
  lastName,
  born,
  died,
  buried,
  married,
  notes,
}, type }) => (
  <table>
    <tr>
      <td colSpan="2">{
        type === "Husband" && `Husband \n Given name(s)`
      }</td>
      <td>{givenName}</td>
      <td>Last Name</td>
      <td>{lastName}</td>
    </tr>
    <tr>
      <td className="center">Sex</td>
      <td>Born</td>
      <td>{born.date}</td>
      <td>Place</td>
      <td>{born.place}</td>
    </tr>
    <tr>
      <td className="center" rowSpan="5">M</td>
      <td>Died</td>
      <td>{died.date}</td>
      <td>Place</td>
      <td>{died.date}</td>
    </tr>
    <tr>
      <td>Buried</td>
      <td>{buried.date}</td>
      <td>Place</td>
      <td>{buried.date}</td>
    </tr>
    <tr>
      <td>Married</td>
      <td>{married.date}</td>
      <td>Place</td>
      <td>{married.date}</td>
    </tr>
    <tr>
      <td>Notes</td>
      <td colSpan="3"></td>
    </tr>
    <tr>
      <td colSpan="4"></td>
    </tr>
  </table>
);

export default Person;