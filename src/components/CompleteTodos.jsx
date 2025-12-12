import { TodoTicket } from "./TodoTicket";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <TodoTicket
              index={index}
              todo={todo}
              buttons={{
                type: "completeButtons",
                buttonFunctions: {
                  onClickBack: onClickBack,
                },
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
