import React from "react";

const MealsContext = React.createContext();

const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes", "Baked Chicken", "Baked Beef"];

const MealsProvider = ({children}) => {
    const [meals, setMeals] = React.useState(todaysMeals);

    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    );
}

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;
