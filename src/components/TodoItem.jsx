function TodoItem(props) {

    const handleCheck = () => {
        props.completed()
    }

    return (
        <>
            <div className="item">
                <div className={props.todo.status} onClick={(event) => handleCheck()}>
                    {props.todo.status === "complete" ? <img src="../src/assets/images/icon-check.svg" style={{ display: "flex" }} /> : <img src="../src/assets/images/icon-check.svg" style={{ display: "none" }} />}
                </div>
                {props.todo.status === "complete" ? <p className="strike">{props.todo.text}</p> : <p>{props.todo.text}</p>}
                <img src="../src/assets/images/icon-cross.svg" onClick={() => props.remove(props.index)} />
            </div>
        </>
    )
}

export default TodoItem