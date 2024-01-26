
function Button({name, onClick}) {
    return (
        <button onClick={onClick}> Submit {name}</button>
    )
}

export default Button;