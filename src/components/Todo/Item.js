import { useMutation } from "@apollo/client";
import { FETCH_TODOS, UPDATE_TODO } from "./../../queries/todo";

const Item = (props) => {
  const [updateTodo, { data, loading, error }] = useMutation(UPDATE_TODO);

  if (loading) return <p>Upading...</p>;
  if (error) return <p>Oops! Something went wrong</p>;

  const handleUpdateTodo = () => {
    updateTodo({
      variables: {
        id: props.data.id,
      },
      refetchQueries: [
        {
          query: FETCH_TODOS,
        },
        "fetchTodos",
      ],
    });
  };

  return (
    <div id="item">
      <span>
        {props.data.status ? <s>{props.data.title}</s> : props.data.title}
      </span>
      {!props.data.status && <button onClick={handleUpdateTodo}>Done</button>}
    </div>
  );
};

export default Item;
