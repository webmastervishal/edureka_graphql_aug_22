import { gql } from "@apollo/client";

export const FETCH_TODOS = gql`
  query FetchTodos {
    todos {
      id
      title
      status
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    addTodo(title: $title) {
      id
      title
      status
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!) {
    updateTodo(id: $id) {
      id
      title
      status
    }
  }
`;
