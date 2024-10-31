import { useState } from "react"

function TodoItem(props) {
    // const [cross, setCross] = useState("none")

    const handleCheck = () => {
        // setCross("flex")
        props.completed()
    }

    return (
        <>
            <div className="item">
                <div className={props.todo.status} onClick={(event) => handleCheck()}>
                    {/* <img src="../src/assets/images/icon-check.svg" style={{ display: `${cross}` }} /> */}
                </div>
                {props.todo.status === "complete" ? <p className="strike">{props.todo.text}</p> : <p>{props.todo.text}</p>}
                <img src="../src/assets/images/icon-cross.svg" onClick={() => props.remove(props.index)} />
            </div>
        </>
    )
}

export default TodoItem