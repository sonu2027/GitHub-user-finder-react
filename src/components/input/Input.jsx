import "./Input.css"
function Input(props){
    return (
        <>
        <input placeholder="Enter username..." onChange={props.change} type="text" />
        </>
    )
}
export default Input