import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {
    const { meals } = useMealsListContext();

    const styles = {
        backgroundColor: 'lightblue',
        padding: '10px',
        margin: '10px'
    };

    return (
        <div>
            <h2>Meals List using Context API</h2>
            <ul>
                {meals.map((meal, index) => <li style = {styles}
                 key={index}>{meal}</li>)}
            </ul>
        </div>
    );
}

export default MealsList;