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
        {JSON.stringify(data)}
      </div>
    </>
  );
}

export default App;
