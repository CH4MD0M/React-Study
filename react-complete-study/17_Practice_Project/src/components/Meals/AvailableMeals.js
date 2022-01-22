import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
    // 비동기 처리는 컴포넌트가 처음 로드 된 후 로드되지 않는다(dependency가 빈 배열이기 때문).
    // 따라서 처음에는 데이터가 없다가 데이터를 비동기로 받아오게 되면 데이터를 나타나게 하기 위해 useState를 사용한다.
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch(
                "https://react-http-1320f-default-rtdb.firebaseio.com/meals.json "
            );

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const responseData = await response.json();

            // responseData는 중첩된 객체(nested object)이고 이를 배열로 변경해 주어야 한다.
            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }

            setMeals(loadedMeals);
            setIsLoading(false);
        };

        /* try {
            fetchMeals().catch();
        } catch (error) {
            setIsLoading(false);
            setHttpError(error.message);
        } */
        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading... </p>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError} </p>
            </section>
        );
    }

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
