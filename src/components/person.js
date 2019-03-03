import React from 'react'

const Person = ({ data: {
  givenName,
  lastName,
  born,
  died,
  buried,
  married,
  sex,
  notes,
}, type }) => (
  <table>
    <tbody>
      <tr className="header">
        <td colSpan="2">{`${type[0].toUpperCase() + type.slice(1)} Given name(s)`}</td>
        <td>{givenName}</td>
        <td>Last Name</td>
        <td>{lastName}</td>
      </tr>
      <tr>
        {type === "children"
        ? <td className="center label">Sex</td>
        : <td className="center label no-bottom"></td>}
        <td className="label">Born</td>
        <td>{born.date}</td>
        <td className="label">Place</td>
        <td>{born.place}</td>
      </tr>
      <tr>
        <td className="center" rowSpan="5">{sex}</td>
        <td className="label">Died</td>
        <td>{died.date}</td>
        <td className="label">Place</td>
        <td>{died.date}</td>
      </tr>
      <tr>
        <td className="label">Buried</td>
        <td>{buried.date}</td>
        <td className="label">Place</td>
        <td>{buried.date}</td>
      </tr>
      <tr>
        <td className="label">Married</td>
        <td>{married.date}</td>
        <td className="label">Place</td>
        <td>{married.date}</td>
      </tr>
      <tr>
        <td>Notes</td>
        <td colSpan="3"></td>
      </tr>
      <tr>
        <td colSpan="4" style={{height: "37px"}}></td>
      </tr>
    </tbody>
  </table>
);

export default Person;