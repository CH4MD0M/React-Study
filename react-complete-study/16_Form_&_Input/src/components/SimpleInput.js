import { useState } from "react";

const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

    // Validation
    const enteredNameIsValid = enteredName.trim() !== "";
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

    const enteredEmailIsValid = enteredEmail.includes("@");
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

    // form Validation
    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // onChange
    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value);
    };
    const emailInputChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    };

    // onBlur
    const nameInputBlurHandler = (e) => {
        // focus를 잃었다는 것은 편집을 했다는 뜻이기 때문에 true로 state를 변경한다.
        setEnteredNameIsTouched(true);
    };
    const emailInputBlurHandler = (e) => {
        setEnteredEmailIsTouched(true);
    };

    // onSubmit
    const formSubmissionHandler = (e) => {
        e.preventDefault();
        setEnteredNameIsTouched(true);
        setEnteredEmailIsTouched(true);

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }

        // Reset input
        setEnteredName("");
        setEnteredNameIsTouched(false);

        setEnteredEmail("");
        setEnteredEmailIsTouched(false);
    };

    // Toggle ClassName
    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control";
    const emailInputClasses = emailInputIsInvalid
        ? "form-control invalid"
        : "form-control";

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
                    <p className="error-text">Name must NOT be empty.</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Your E-Mail</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {emailInputIsInvalid && (
                    <p className="error-text">Please enter a Valid email.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
