import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {
    let [value, setValue] = useState<number | string>(0)

    let [minValue, setMinValue] = useState<number>(0)

    let [maxValue, setMaxValue] = useState<number>(5)

    let [isButtonSetDisabled, setIsButtonSetDisabled] = useState<boolean>(true)

    let [isButtonIncDisabled, setIsButtonIncDisabled] = useState<boolean>(false)


    const onClickIncreaseHandler = () => {


    }

    const onClickResetValueHandler = () => {
        setValue(minValue)
    }

    const onChangeSetMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        setValue('set numbers')
        setIsButtonIncDisabled(true)
        setIsButtonSetDisabled(false)
    }

    const onChangeSetMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
        setValue('set numbers')
        setIsButtonIncDisabled(true)
        setIsButtonSetDisabled(false)
    }

    const onClickSetValueHandler = () => {
        setValue(minValue)
        setIsButtonSetDisabled(true)
        setIsButtonIncDisabled(false)
    }

    let finalButtonSetIsDisabled = isButtonSetDisabled || minValue === maxValue || minValue < 0 || minValue > maxValue

    return (
        <div className="App">
            <div className={value === maxValue ? 'red' : ''}>{value}</div>
            <button onClick={onClickIncreaseHandler} disabled={isButtonIncDisabled}>+</button>
            <button onClick={onClickResetValueHandler} disabled={isButtonIncDisabled}>reset</button>
            <div>
                <input type="number" onChange={onChangeSetMinValueHandler} value={minValue}/>
                <span>MinValue</span>
            </div>
            <div>
                <input type="number" onChange={onChangeSetMaxValueHandler} value={maxValue}/>
                <span>MaxValue</span>
            </div>

            <div>
                <button onClick={onClickSetValueHandler} disabled={finalButtonSetIsDisabled}>Set</button>
            </div>


        </div>
    );
}

export default App;
