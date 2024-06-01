import "./App.css";
import { useQuery, gql } from "@apollo/client";

const query = gql`
query getTodosWithUser{
  getTodos {
    id
    title
    completed
    user {
      id
      name
    }
  }
}
`;

function App() {

  const {data, loading} = useQuery(query);

  if(loading) return <h1>Loading...</h1>

  return (
    <>
      <div className="">
        <table style={{border: "2px solid white"}}>
          <tbody>
            {
              data.getTodos.map(todo => <tr style={{border: "1px solid white"}} key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.user.name}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
