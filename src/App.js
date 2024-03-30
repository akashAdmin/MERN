import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [users, setUsers] = useState([]);
  const [userName, setUsername] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resopones) => resopones.json())
      .then((json) => setUsers(json));
  }, []);
  console.log(users);
  const handleDelete = () => {};
  return (
    <div className="App">
      <table className="bp4-html-tabel modifier">
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>website</th>
          <th>Action</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td
                contentEditable={true}
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="edit the id"
              >
                {user.id}
              </td>
              <td
                contentEditable={true}
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="edit name"
              >
                {user.name}
              </td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <button className="bg-warning px-3">Update</button>
              <button className="bg-danger m-2" onClick={handleDelete}>
                Delete
              </button>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
export default App;
