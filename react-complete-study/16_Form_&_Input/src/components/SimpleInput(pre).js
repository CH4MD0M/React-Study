import { useEffect, useRef, useState } from "react";

const SimpleInput = () => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

    useEffect(() => {
        if (enteredNameIsValid) {
            console.log("Name Input is valid");
        }
    }, [enteredNameIsValid]);

    // onChange
    const nameInputChangeHandler = (e) => {
        setEnteredName(e.target.value);

        if (e.target.value.trim() !== "") {
            setEnteredNameIsValid(true);
        }
    };

    // onBlur
    const nameInputBlurHandler = (e) => {
        // focus를 잃었다는 것은 편집을 했다는 뜻이기 때문에 true로 state를 변경한다.
        setEnteredNameIsTouched(true);

        if (enteredName.trim() === "") {
            setEnteredNameIsValid(false);
            return;
        }
    };

    // onSubmit
    const formSubmissionHandler = (e) => {
        e.preventDefault();

        setEnteredNameIsTouched(true);

        if (enteredName.trim() === "") {
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);

        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        // Reset input
        setEnteredName("");
        // nameInputRef.current.value = ""; => NOT IDEAL, DON'T MANIPULATE THE DOM
    };

    // Toggle ClassName
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
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
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
