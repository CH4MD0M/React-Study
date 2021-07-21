import Expenseitem from "./ExpenseItem";
import Card from "./Card";

import "./Expenses.css";

function Expenses(props) {
    // console.log(props.items);

    return (
        <Card className="expenses">
            {/* {props.items.map((component) => {
                return (
                    <Expenseitem
                        title={component.title}
                        amount={component.amount}
                        date={component.date}
                    />
                );
            })} */}
            <Expenseitem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <Expenseitem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <Expenseitem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <Expenseitem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
        </Card>
    );
}
export default Expenses;
