import { useState } from "react";
const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [IsTouched, setIsTouched] = useState(false);

    // Validation
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && IsTouched;

    // onChange
    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    // onBlur
    const inputBlurHandler = (e) => {
        setIsTouched(true);
    };

    // Reset
    const reset = () => {
        setEnteredValue("");
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;
