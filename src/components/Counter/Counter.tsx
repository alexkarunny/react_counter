import {Button} from '../Button/Button';
import React from 'react';
import c from './Counter.module.css'

type CounterPropsType = {
    minValue: number
    maxValue: number
    value: number | string
    onClickIncreaseHandler: () => void
    onClickResetValueHandler: () => void
    isIncDisables: boolean
    isResetDisabled: boolean
    isEditModeOn: boolean
}

export const Counter = (props: CounterPropsType) => {

    const finalValue = props.minValue === props.maxValue || props.minValue < 0 || props.minValue > props.maxValue
        ? 'incorrect values'
        : props.isEditModeOn
            ? 'set settings and press "set" '
            : props.value
    const finalButtonIncIsDisabled = props.isIncDisables || props.value === props.maxValue
    const finalDisplayClassName = c.display + (props.value === props.maxValue || finalValue === 'incorrect values' ? ' ' + c.red : '')
    const finalResetButtonIsDisabled = props.value === props.minValue || props.isResetDisabled


    return (
        <div className={c.counter_wrapper}>
            <div className={finalDisplayClassName}>{finalValue}</div>
            <Button title={'Inc'}
                    isDisabled={finalButtonIncIsDisabled}
                    onClickCallback={props.onClickIncreaseHandler}
            />
            <Button title={'Reset'}
                    isDisabled={finalResetButtonIsDisabled}
                    onClickCallback={props.onClickResetValueHandler}
            />
        </div>
    )
}