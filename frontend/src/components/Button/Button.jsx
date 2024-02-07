
function Button({id, name, onClick, disabled}) {
    return (
        <button id={id} onClick={onClick} disabled = {disabled}> Submit {name}</button>
    )
}

export default Button;