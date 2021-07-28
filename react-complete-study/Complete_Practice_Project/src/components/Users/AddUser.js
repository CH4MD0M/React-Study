import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();
        console.log(enteredUsername, enteredAge);

        // input이 비었을 때
        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                title: "Invalid Input",
                message:
                    "Please Enter a Valid Name and Age (non-empty values).",
            });
            return;
        }
        // age를 1보다 작게 입력했을 때
        if (+enteredAge < 1) {
            setError({
                title: "Invalid Input",
                message: "Please Enter a Valid Age (> 0   ).",
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    };

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
