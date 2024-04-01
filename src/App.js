// import { useEffect, useState } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";


// function App() {
//   const [users, setUsers] = useState([]);
//   const [userName, setUsername] = useState("");
//   const [id, setId] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((resoponse) => resoponse.json())
//       .then((json) => setUsers(json));
//   }, []);
//   console.log(users);
//   const handleDelete = () => {};
//   const addUser = () => {
//     const username = userName.trim();
//     const Id = id.trim();
//     if (username && Id) {
//       fetch("https://jsonplaceholder.typicode.com/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json; charset=UTF-8"
//         },
//         body: JSON.stringify({ username: username, Id: Id })
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           setUsers([...users, data]);
//         });
//     }alert("added")
//   };
//   return (
//     <div className="App">
//       <table className="bp4-html-tabel modifier">
        
//         <thead>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>website</th>
//           <th>Action</th>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td
//                 contentEditable={true}
//                 value={id}
      
//                 placeholder="edit the id"
//               >
//                 {user.id}
//               </td>
//               <td
//                 contentEditable={true}
//                 value={userName}
     
//                 placeholder="edit name"
//               >
//                 {user.name}
//               </td>
//               <td>{user.email}</td>
//               <td>{user.website}</td>
//               <button className="bg-warning px-3">Update</button>
//               <button className="bg-danger m-2" onClick={handleDelete}>
//                 Delete
//               </button>
//             </tr>
//           ))}
//           <tr>
//             <td><input type="text" placeholder="enter the id" value={id} onChange={(e)=>{setId(e.target.value)}}></input></td>
//             <td><input type="text" placeholder="enter the name" value={userName} onChange={(e)=>{setUsername(e.target.value)}}></input></td>
//           <td><button onClick={addUser}>add</button></td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;





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
  import "bootstrap/dist/js/bootstrap.bundle.min.js";
  import { useEffect, useState } from "react";
  import "./App.css"

  function App(){
      const [users,setUsers] = useState([]);
      const [names,setNewname] = useState("");
      const [emails,setNewEmail] =useState("");
      console.log(users)
      const name = names.trim();
      const email = emails.trim();
      useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json() ) 
                  .then((json) => setUsers(json))

      },[]);
      const onchangeHandler=(id,key,value)=>{

        setUsers((users)=>{
        return users.map((user)=>{
        return user.id === id? {...user,[key]:value} :user
        })
        })

      }
      function addUser(){
        if(name&&email)
        fetch('https://jsonplaceholder.typicode.com/users',{
          method:"POST",
          body:JSON.stringify({name,email}),headers: {
                                    "Content-Type": "application/json; charset=UTF-8 "
                            }
        }).then((response)=>{
          response.json()
        }).then((data)=>{
    setUsers([...users,data])
        })
        alert("data added")
      }
  return(
      <div className="App">
              <table className='bp4-html-table modifier'>
                  <thead>
                      <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>

                      <th>Action</th>
                </thead>
                <tbody>
                

                    {users.map(user => 
                      <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.website}</td>
                          <td><contentEditablet onChange={value => onchangeHandler(user.id, 'email',value)} value={user.email} /></td>
                          <td><contentEditable onChange={value => onchangeHandler(user.id, 'website',value)} value={user.website}/></td>
                        
                      </tr>
                  )}
          </tbody>
                <br></br>
                <tfoot>
                  <tr>
                      <input type="text" placeholder="enterid" onChange={(e)=>setNewEmail(e.target.value)}></input>
                      <input type="text" placeholder="enter user name" onChange={(e)=>{setNewname(e.target.value)}}></input>
                      <input type="text" placeholder="enter the email"></input>
                      <button onClick={addUser}>addUser</button>
                    
                  </tr>
                
                </tfoot>
      </table>
      </div>
  )
  }
  export default App;