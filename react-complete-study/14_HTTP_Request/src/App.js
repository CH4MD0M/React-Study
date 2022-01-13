import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMovieHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                "https://react-http-1320f-default-rtdb.firebaseio.com/movies.json"
            );

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const data = await response.json();
            console.log(data);

            const loadedMovies = [];
            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate,
                });
            }

            /* const transformdMovies = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    releaseDate: movieData.release_date,
                    openingText: movieData.opening_crawl,
                };
            }); */

            setMovies(loadedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);

        /* fetch("https://swapi.py4e.com/api/films/")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const transformdMovies = data.results.map((movieData) => {
                    return {
                        id: movieData.episode_id,
                        title: movieData.title,
                        releaseDate: movieData.release_date,
                        openingText: movieData.opening_crawl,
                    };
                });
                setMovies(transformdMovies);
            }); */
    }, []);

    useEffect(() => {
        fetchMovieHandler();
    }, [fetchMovieHandler]);

    async function addMovieHandler(movie) {
        const response = await fetch(
            "https://react-http-1320f-default-rtdb.firebaseio.com/movies.json",
            {
                method: "POST",
                body: JSON.stringify(movie),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        console.log(data);
    }

    let content = <p>Found No movies.</p>;

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }
    if (error) {
        content = <p>{error}</p>;
    }
    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMovieHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default App;
