import { useRef, useState } from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    // 초기 화면에서도 state가 true로 되어있기 때문에 input에 내용을 작성했을 때를 판별해야 함.
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const nameInputChangehandler = (e) => {
        setEnteredName(e.target.value);
    };

    const formSubmissionHandler = (e) => {
        e.preventDefault();

        setEnteredNameTouched(true);

        // input에 아무 입력도 하지 않았을 때
        if (enteredName.trim() === "") {
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);
        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        // nameInputRef.current.value = ""; => NOT IDEAL, DON'T MANIPULATE THE DOM :(
        setEnteredName("");
    };

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    // CSS Class Change
    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control ";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    onChange={nameInputChangehandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && (
                    <p className={"error-text"}>Name must Not be EMPTY!</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
