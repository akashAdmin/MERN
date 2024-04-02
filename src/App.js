// import { useEffect, useState } from 'react';
// import { Button, EditableText, InputGroup, Toaster } from '@blueprintjs/core';
// import './App.css';

// const AppToaster = Toaster.create({
//     position: "top"
// })

// function App() {
//     const [users, setUsers] = useState([]);  //users datas are added in an array!
//     const [newName, setNewName] = useState("")
//     const [newEmail, setNewEmail] = useState("")
//     const [newWebsite, setNewWebsite] = useState("")
// console.log(users)

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json() )
//         .then((json) => setUsers(json))
//     },[])

//     function addUser() {
//         const name = newName.trim();
//         const email = newEmail.trim();
//         const website = newWebsite.trim();

//         if (name && email && website) {
//             fetch("https://jsonplaceholder.typicode.com/users",
//                 {
//                     method: "POST",
//                     body: JSON.stringify({
//                         name,
//                         email,
//                         website
//                     }),
//                     headers: {
//                         "Content-Type": "application/json; charset=UTF-8 "
//                     }
//                 }
//             ).then((response) => response.json() )
//             .then(data => {
//                 setUsers([...users, data]);
//                 AppToaster.show({
//                     message: "user added successfully",
//                     intent: 'success',
//                     timeout: 3000
//                 })
//                 setNewName("");
//                 setNewEmail("");
//                 setNewWebsite("");

//             })
//         }

//     }

//     function onChangeHandler(id, key, value) {       //userid, just name as "email", api user value
//         setUsers((users) => {                // <td><EditableText onChange={value => onChangeHandler(user.id, 'email',value)} value={user.email} /></td>
//             return users.map(user => {
//                 return user.id === id ? {...user, [key]: value } : user;
//             })
//         })
//     }

//     function updateUser(id) {
//         const user = users.find((user) => user.id === id );
//         fetch(`https://jsonplaceholder.typicode.com/users/10`,
//                 {
//                     method: "PUT",
//                     body: JSON.stringify(user),
//                     headers: {
//                         "Content-Type": "application/json; charset=UTF-8 "
//                     }
//                 }
//             )
//         .then( response => response.json())    
//         .then(data => {
//                 AppToaster.show({
//                     message: "user updated successfully",
//                     intent: 'success',
//                     timeout: 3000
//                 })

//         })

//     }

//     function deleteUser(id) {
//         fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
//         {
//             method: "DELETE",
//         })
//         .then( response => response.json())    
//         .then(data => {
//                 setUsers((users) => {
//                     return users.filter(user => user.id !== id)
//                 })

//                 AppToaster.show({
//                     message: "user deleted successfully",
//                     intent: 'success',
//                     timeout: 3000
//                 })

//         })
//     }

//   return (
//     <div className="App">
//         <table className='bp4-html-table modifier'>
//             <thead>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Website</th>
//                 <th>Action</th>
//             </thead>
//             <tbody>
//                 {users.map(user => 
//                     <tr key={user.id}>
//                         <td>{user.id}</td>
//                         <td>{user.name}</td>
//                         <td><EditableText onChange={value => onChangeHandler(user.id, 'email',value)} value={user.email} /></td>
//                         <td><EditableText onChange={value => onChangeHandler(user.id, 'website',value)} value={user.website}/></td>
//                         <td>
//                             <Button intent='primary' onClick={() => updateUser(user.id)}>Update</Button>
//                             &nbsp;
//                             <Button intent='danger' onClick={() => deleteUser(user.id)} >Delete</Button>
//                         </td>
//                     </tr>
//                 )}
//             </tbody>
//             <tfoot>
//                 <tr>
//                     <td></td>
//                     <td>
//                         <InputGroup
//                             value={newName}
//                             onChange={(e) => setNewName(e.target.value) }
//                             placeholder='Enter Name...'
//                         />
//                     </td>
//                     <td>
//                         <InputGroup
//                             value={newEmail}
//                             onChange={(e) => setNewEmail(e.target.value) }
//                             placeholder='Enter Email...'
//                         />
//                     </td>
//                     <td>
//                         <InputGroup
//                             value={newWebsite}
//                             onChange={(e) => setNewWebsite(e.target.value) }
//                             placeholder='Enter Website...'
//                         />
//                     </td>
//                     <td>
//                         <Button intent='success' onClick={addUser}>Add User</Button>
//                     </td>
//                 </tr>
//             </tfoot>
//         </table>
//     </div>
//   );
// }
// export default App;












import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
// import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  // const handleChange = (id, key, value) => {
  //   const updatedUsers = users.map((user) =>
  //     user.id === id ? { ...user, [key]: value } : user
  //   );
  //   setUsers(updatedUsers);
  // };

  function handleChange(id, key, value) {       //userid, just name as "email", api user value
    setUsers((users) => {                // <td><EditableText onChange={value => onChangeHandler(user.id, 'email',value)} value={user.email} /></td>
        return users.map(user => {
            return user.id === id ? {...user, [key]: value } : user;
        })
    })
}

  const addUser = () => {
    if (newName.trim() && newEmail.trim()) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({ name: newName, email: newEmail }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUsers([...users, data]);
          setNewName("");
          setNewEmail("");
          alert("User added successfully!");
        });
    } else {
      alert("Please enter both name and email.");
    }
  };


    function userUpdate(id) {
        const user = users.find((user) => user.id === id );
        fetch(`https://jsonplaceholder.typicode.com/users/10`,
                {
                    method: "PUT",
                    body: JSON.stringify(user),
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8 "
                    }
                }
            )
        .then( response => response.json())    
        .then(data => {
               console.log(data)

        })

    }
  return (
    <div className="App">
      <table className="bp4-html-table modifier">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                 <div
                  contentEditable
                  onChange={(e) =>
                    handleChange(user.id, "name", e.target.value)
                  }
                >
                  {user.name}
                </div>
              </td>
              <td>
                <div
                  contentEditable
                  onChange={(e) =>
                    handleChange(user.id, "email", e.target.value) 
                  }
                >
                  {user.email}
                </div> 
                 {/* d <td>< contentEditable onChange={value => handleChange(user.id, 'email',value)} value={user.email} /></td>
                   <t>< contentEditable onChange={value =>  handleChange(user.id, 'website',value)} value={user.website}/></td> */}
              </td>
              <td>{user.website}</td>
              <td>
                <button className="btn btn-warning" onClick={userUpdate(user.id)}>Update</button>
                <button className="btn btn-danger ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                placeholder="Enter user name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </td>
            <td></td>
            <td>
              <button className="btn btn-primary" onClick={addUser}>
                Add User
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
export default App;
