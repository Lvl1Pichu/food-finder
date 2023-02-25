interface OutputProps {
    recipeTitle: string;
}

function Output(props: OutputProps) {
    return (
        <p>{props.recipeTitle}</p>
    )
}

export default Output;