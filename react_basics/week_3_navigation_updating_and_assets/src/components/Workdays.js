function Workdays(props) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    return (
        <div>
            <h1>Workdays</h1>
            {days.map((day, index) => (
                <p
                    key={day}
                    style={{
                        fontWeight: index === props.day - 1 ? "bold" : "normal",
                    }}
                >
                    {day}
                </p>
            ))}
        </div>
    );
}

export default Workdays;