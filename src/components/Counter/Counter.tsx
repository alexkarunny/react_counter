import {Button} from '../Button';
import React from 'react';
import classes from './Counter.module.css'

type CounterPropsType = {
    minValue: number
    maxValue: number
    value: number | string
    onClickIncreaseHandler: () => void
    onClickResetValueHandler: () => void
    isIncDisables: boolean
    isResetDisabled: boolean
}

export const Counter = (props: CounterPropsType) => {


    const finalValue = props.minValue === props.maxValue || props.minValue < 0 || props.minValue > props.maxValue ? 'incorrect values' : props.value
    const finalButtonIncIsDisabled = props.isIncDisables || props.value === props.maxValue

    return (
        <div>
            <div className={props.value === props.maxValue ? classes.red : ''}>{finalValue}</div>
            <Button title={'Inc'}
                    isDisabled={finalButtonIncIsDisabled}
                    onClickCallback={props.onClickIncreaseHandler}
            />
            <Button title={'Reset'}
                    isDisabled={props.isResetDisabled}
                    onClickCallback={props.onClickResetValueHandler}
            />
        </div>
    )
}