function Weekends(props) {
    const days = ["Sunday", "Saturday"];
    
    return (
        <div>
            <h1>Weekends</h1>
            {days.map((day, index) => (
                <p
                    key={day}
                    style={{
                        fontWeight: (index === 0 && props.day === 0) || (index === 1 && props.day === 6) ? "bold" : "normal",
                    }}
                >
                    {day}
                </p>
            ))}
        </div>
    );
}

export default Weekends;