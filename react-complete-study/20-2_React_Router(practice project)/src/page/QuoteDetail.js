import { useEffect } from "react";
import { Route, Link, useParams, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    const { quoteId } = params;
    console.log(match);

    const {
        sendRequest,
        status,
        data: loadedQuote,
        error,
    } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    // LoadingSpinner
    if (status === "pending") {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }
    // ErrorMessage
    if (error) {
        return <p className="centered focused">{error}</p>;
    }

    if (!loadedQuote) {
        return <p>No quote found!</p>;
    }

    return (
        <>
            <HighlightedQuote
                author={loadedQuote.author}
                text={loadedQuote.text}
            />
            <Route path={`${match.path}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </>
    );
};

export default QuoteDetail;
