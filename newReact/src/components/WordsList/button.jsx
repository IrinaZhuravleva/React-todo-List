

export const Button = (props) => {
    return (
        <button onClick={props.func}>{props.children}</button>
    )
}