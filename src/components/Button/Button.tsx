import c from './Button.module.css'

type ButtonTypeProps = {
    title: string
    isDisabled: boolean
    onClickCallback: () => void
}

export const Button = (props: ButtonTypeProps) => {
    return (
        <div>
            <button onClick={props.onClickCallback} disabled={props.isDisabled} className={c.button}>{props.title}</button>
        </div>
    )
}