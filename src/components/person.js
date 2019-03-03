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
  <>
    <thead>
      <tr className="header">
        <td colSpan="2">
          <strong>{`${type[0].toUpperCase() + type.slice(1)}`}</strong><br />
          Given name(s)</td>
        <td className="no-left">{givenName}</td>
        <td>Last<br />
            Name</td>
        <td className="no-left">{lastName}</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        {type === "children"
        ? <td className="center label">Sex</td>
        : <td className="center label no-bottom"></td>}
        <td className="label">Born</td>
        <td className="no-left">{born.date}</td>
        <td className="label">Place</td>
        <td className="no-left">{born.place}</td>
      </tr>
      <tr>
        <td className="center" rowSpan="5">{sex}</td>
        <td className="label">Died</td>
        <td className="no-left">{died.date}</td>
        <td className="label">Place</td>
        <td className="no-left">{died.date}</td>
      </tr>
      <tr>
        <td className="label">Buried</td>
        <td className="no-left">{buried.date}</td>
        <td className="label">Place</td>
        <td className="no-left">{buried.date}</td>
      </tr>
      <tr>
        <td className="label">Married</td>
        <td className="no-left">{married.date}</td>
        <td className="label">Place</td>
        <td className="no-left">{married.date}</td>
      </tr>
      <tr>
        <td>Notes</td>
        <td className="no-left" colSpan="3"></td>
      </tr>
      <tr>
        <td colSpan="4">&nbsp;</td>
      </tr>
    </tbody>
  </>
);

export default Person;