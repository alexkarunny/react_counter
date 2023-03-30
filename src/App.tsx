import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from './components/Button';

function App() {
    let [value, setValue] = useState<number | string>(0)

    let [minValue, setMinValue] = useState<number>(0)

    let [maxValue, setMaxValue] = useState<number>(5)

    let [isButtonSetDisabled, setIsButtonSetDisabled] = useState<boolean>(true)

    let [isButtonIncDisabled, setIsButtonIncDisabled] = useState<boolean>(false)

    let [isButtonResetDisabled, setIsButtonResetDisabled] = useState<boolean>(true)

    const onClickIncreaseHandler = () => {
        if (typeof value === 'number') {
            setValue(++value)
            setIsButtonResetDisabled(false)
        }
    }

    const onClickResetValueHandler = () => {
        setValue(minValue)
        setIsButtonResetDisabled(true)
    }

    const onChangeSetValueHandler = (e: ChangeEvent<HTMLInputElement>, setValueCallback: (value: number) => void) => {
        setValueCallback(+e.currentTarget.value)
        setValue('enter values and press \'set\'')
        setIsButtonIncDisabled(true)
        setIsButtonSetDisabled(false)
        setIsButtonResetDisabled(true)
    }

    const onClickSetValueHandler = () => {
        setValue(minValue)
        setIsButtonIncDisabled(false)
    }

    const finalButtonSetIsDisabled = isButtonSetDisabled || minValue === maxValue || minValue < 0 || minValue > maxValue

    const finalMaxValueClassName = minValue === maxValue || minValue > maxValue || maxValue < 0 ? 'incorrect_input' : ''

    const finalMinValueClassName = minValue === maxValue || minValue < 0 || minValue > maxValue ? 'incorrect_input' : ''

    const finalValue = minValue === maxValue || minValue < 0 || minValue > maxValue ? 'incorrect values' : value

    return (
        <div className="App">
            <div className={value === maxValue ? 'red' : ''}>{finalValue}</div>
            <Button title={'Inc'} isDisabled={isButtonIncDisabled} onClickCallback={onClickIncreaseHandler}></Button>
            <Button title={'Reset'} isDisabled={isButtonResetDisabled}
                    onClickCallback={onClickResetValueHandler}></Button>
            <div>
                <span>MinValue: </span>
                <input type="number" onChange={(e) => onChangeSetValueHandler(e, setMinValue)} value={minValue}
                       className={finalMinValueClassName}/>
            </div>
            <div>
                <span>MaxValue: </span>
                <input type="number" onChange={(e) => onChangeSetValueHandler(e, setMaxValue)} value={maxValue}
                       className={finalMaxValueClassName}/>
            </div>

            <div>
                <Button title={'Set'} isDisabled={finalButtonSetIsDisabled}
                        onClickCallback={onClickSetValueHandler}></Button>
            </div>


        </div>
    );
}

export default App;
