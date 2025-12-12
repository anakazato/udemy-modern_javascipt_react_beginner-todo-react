import { TodoTicket } from "./TodoTicket";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <TodoTicket
              index={index}
              todo={todo}
              buttons={{
                type: "incompleteButtons",
                buttonFunctions: {
                  onClickComplete: onClickComplete,
                  onClickDelete: onClickDelete,
                },
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
