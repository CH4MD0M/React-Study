import React, {
    useState,
    useEffect,
    useReducer,
    useContext,
    useRef,
} from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Login.module.css";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

// InitialState
const emailInitial = {
    value: "",
    isValid: null,
};
const passwordInitial = {
    value: "",
    isValid: null,
};

// Reducer 함수
const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    }
    if (action.type === "INPUR_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
    }
};
const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === "INPUR_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
    }
};

const Login = () => {
    // useState 선언
    const [formIsValid, setFormIsValid] = useState(false);

    // useReducer 선언
    const [emailState, dispatchEmail] = useReducer(emailReducer, emailInitial);
    const [passwordState, dispatchPassword] = useReducer(
        passwordReducer,
        passwordInitial
    );

    // useContext
    const authCtx = useContext(AuthContext);

    // useRef
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("checking");
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        return () => {
            console.log("clear");
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "INPUR_BLUR" });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: "INPUR_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            authCtx.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    id="Email"
                    label="E-mail"
                    type="email"
                    isValid={emailIsValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <Input
                    ref={passwordInputRef}
                    id="password"
                    label="Password"
                    type="password"
                    isValid={passwordIsValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />

                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
