import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';


function App() {

    useEffect(() => {
        const startMinValue = localStorage.getItem('minValue')
        const startMaxValue = localStorage.getItem('maxValue')
        if (startMinValue && startMaxValue) {
            setValue(JSON.parse(startMinValue))
            setMinValue(JSON.parse(startMinValue))
            setMaxValue(JSON.parse(startMaxValue))
        }
    }, [])

    let [value, setValue] = useState<number | string>(0)

    let [minValue, setMinValue] = useState<number>(0)

    let [maxValue, setMaxValue] = useState<number>(10)

    let [isButtonIncDisabled, setIsButtonIncDisabled] = useState<boolean>(false)

    let [isButtonResetDisabled, setIsButtonResetDisabled] = useState<boolean>(true)

    let [isButtonSetDisabled, setIsButtonSetDisabled] = useState<boolean>(true)

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

    const onChangeSetValueHandler = (e: ChangeEvent<HTMLInputElement>, setValueCase: 'min' | 'max') => {
        if (setValueCase === 'min') setMinValue(+e.currentTarget.value)
        if (setValueCase === 'max') setMaxValue(+e.currentTarget.value)
        setValue('enter values and press \'set\'')
        setIsButtonIncDisabled(true)
        setIsButtonSetDisabled(false)
        setIsButtonResetDisabled(true)
    }

    const onClickSetValueHandler = () => {
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setValue(minValue)
        setIsButtonIncDisabled(false)
    }

    return (
        <div className="App">
            <Counter value={value} maxValue={maxValue} minValue={minValue}
                     onClickIncreaseHandler={onClickIncreaseHandler} onClickResetValueHandler={onClickResetValueHandler}
                     isResetDisabled={isButtonResetDisabled} isIncDisables={isButtonIncDisabled}/>
            <Settings minValue={minValue} maxValue={maxValue} value={value} isSetDisabled={isButtonSetDisabled} onClickSetValueHandler={onClickSetValueHandler} onChangeSetValueHandler={onChangeSetValueHandler}/>
        </div>
    );
}

export default App;
