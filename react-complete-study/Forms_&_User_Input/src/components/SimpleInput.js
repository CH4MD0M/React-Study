import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");

    // 초기 화면에서도 state가 true로 되어있기 때문에 input에 내용을 작성했을 때를 판별해야 함.
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== "";
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };

    const nameInputBlurHandler = (e) => {
        setEnteredNameTouched(true);
    };

    const formSubmissionHandler = (e) => {
        e.preventDefault();
        setEnteredNameTouched(true);

        // input에 아무 입력도 하지 않았을 때
        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName);
        setEnteredName("");
        setEnteredNameTouched(false);
    };

    // CSS Class Change
    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control ";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
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
