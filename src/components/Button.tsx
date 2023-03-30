type ButtonTypeProps = {
    title: string
    isDisabled: boolean
    onClickCallback: () => void
}

export const Button = (props: ButtonTypeProps) => {
    return (
        <div>
            <button onClick={props.onClickCallback} disabled={props.isDisabled}>{props.title}</button>
        </div>
    )
}