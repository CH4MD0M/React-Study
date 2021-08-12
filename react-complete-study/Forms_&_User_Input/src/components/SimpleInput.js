import { useState } from "react";

const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== "";
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredEmailIsValid = enteredEmail.includes("@");
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };
    const emailInputChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    };

    const nameInputBlurHandler = (e) => {
        setEnteredNameTouched(true);
    };
    const emailInputBlurHandler = (e) => {
        setEnteredEmailTouched(true);
    };

    const formSubmissionHandler = (e) => {
        e.preventDefault();
        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);

        // input에 아무 입력도 하지 않았을 때
        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName);

        setEnteredName("");
        setEnteredNameTouched(false);

        setEnteredEmail("");
        setEnteredEmailTouched(false);
    };

    // CSS Class Change
    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control ";
    const emailInputClasses = emailInputIsInvalid
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
            <div className={emailInputClasses}>
                <label htmlFor="email">Your E-mail</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {emailInputIsInvalid && (
                    <p className={"error-text"}>Please enter a valid email.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
