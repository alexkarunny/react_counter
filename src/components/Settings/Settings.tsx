import {Button} from '../Button';
import React, {ChangeEvent} from 'react';
import c from './Settings.module.css'

type SettingsPropsType = {
    minValue: number
    maxValue: number
    value: number | string
    isSetDisabled: boolean
    onClickSetValueHandler: () => void
    onChangeSetValueHandler: (e: ChangeEvent<HTMLInputElement>, setValueCase: 'min' | 'max') => void
}

export const Settings = (props: SettingsPropsType) => {

    const finalButtonSetIsDisabled = props.isSetDisabled || props.minValue === props.maxValue || props.minValue < 0 || props.minValue > props.maxValue

    const finalMaxValueClassName = props.minValue === props.maxValue || props.minValue > props.maxValue || props.maxValue < 0 ? `${c.incorrect_input}` : ''

    const finalMinValueClassName = props.minValue === props.maxValue || props.minValue < 0 || props.minValue > props.maxValue ? `${c.incorrect_input}` : ''

    return (
        <div>
            <div>
                <span>MinValue: </span>
                <input type="number" onChange={(e) => props.onChangeSetValueHandler(e, 'min')} value={props.minValue}
                       className={finalMinValueClassName}/>
            </div>
            <div>
                <span>MaxValue: </span>
                <input type="number" onChange={(e) => props.onChangeSetValueHandler(e, 'max')} value={props.maxValue}
                       className={finalMaxValueClassName}/>
            </div>

            <div>
                <Button title={'Set'} isDisabled={finalButtonSetIsDisabled}
                        onClickCallback={props.onClickSetValueHandler}/>
            </div>
        </div>
    )
}