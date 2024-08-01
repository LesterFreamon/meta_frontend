function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "lightcoral",
        margin: "20px 0"
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag