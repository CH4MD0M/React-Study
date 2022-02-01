import { useRef, useEffect } from "react";

import LoadingSpinner from "../UI/LoadingSpinner";

import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";

// Css
import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
    const commentTextRef = useRef();

    const { sendRequest, status } = useHttp(addComment);

    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredText = commentTextRef.current.value;
        // optional: Could validate here

        sendRequest({ text: enteredText });
    };

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            {status === "pending" && (
                <div className="centered">
                    <LoadingSpinner />
                </div>
            )}
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor="comment">Your Comment</label>
                <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button className="btn">Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;
