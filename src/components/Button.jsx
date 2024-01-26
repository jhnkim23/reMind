
function Button({id, name, onClick}) {
    return (
        <button id={id} onClick={onClick}> Submit {name}</button>
    )
}

export default Button;