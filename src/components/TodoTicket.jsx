export const TodoTicket = (props) => {
  const { todo, index, buttons } = props;
  let buttonArea = null;
  switch (buttons.type) {
    case "incompleteButtons": {
      buttonArea = (
        <>
          <button
            onClick={() => buttons.buttonFunctions.onClickComplete(index)}
          >
            完了
          </button>

          <button onClick={() => buttons.buttonFunctions.onClickDelete(index)}>
            削除
          </button>
        </>
      );
      break;
    }
    case "completeButtons": {
      buttonArea = (
        <>
          <button onClick={() => buttons.buttonFunctions.onClickBack(index)}>
            戻す
          </button>
        </>
      );
      break;
    }
    default: {
      buttonArea = null;
    }
  }

  return (
    <div className="list-row">
      <p className="todo-item">{todo}</p>
      {buttonArea}
    </div>
  );
};
