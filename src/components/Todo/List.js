import Item from "./Item";
import { useQuery, gql } from "@apollo/client";
import { FETCH_TODOS } from "./../../queries/todo";

const List = () => {
  const { data, error, loading } = useQuery(FETCH_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops! Something went wrong</p>;

  return (
    <div>
      {data.todos.map((todo) => (
        <Item key={todo.id} data={todo} />
      ))}
    </div>
  );
};

export default List;
