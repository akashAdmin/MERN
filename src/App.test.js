import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//function deleteUser(id) {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//       method: "DELETE",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers((users) => {
//           return users.filter((user) => user.id !== id);
//         });

//         AppToaster.show({
//           message: "user deleted successfully",
//           intent: "success",
//           timeout: 3000,
//         });
//       });
//   }
