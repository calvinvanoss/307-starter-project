import React from "react";

function TableHeader() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>ID</th>
        </tr>
      </thead>
    );
  }

  function DeleteUser(id) {
    const promise = fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    });
    return promise
  }
  
function TableBody(props) {
    const rows = props.characterData.map((row, index) => {
        return (
        <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>{row.id}</td>
            <td>
              <button onClick={() => {
                DeleteUser(row.id).then((res) => {
                  if (res.status === 204) {
                    props.removeCharacter(index)
                  }
                })
              }}>
                Delete
              </button>
            </td>
        </tr>
        );
        }
    );
    return (
        <tbody>
            {rows}
            </tbody>
        );
}

function Table(props) {
return (
    <table>
    <TableHeader />
    <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
    </table>
);
}

export default Table;