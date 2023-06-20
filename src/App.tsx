import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from './bll/store';
import {increaseCounter} from './bll/counterReducer';


function App() {

    const storeValue = useSelector<StateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    /*useEffect(() => {
        const startMinValue = localStorage.getItem('minValue')
        const startMaxValue = localStorage.getItem('maxValue')
        if (startMinValue && startMaxValue) {
            setValue(JSON.parse(startMinValue))
            setMinValue(JSON.parse(startMinValue))
            setMaxValue(JSON.parse(startMaxValue))
        }
    }, [])*/

    let [value, setValue] = useState<number | string>(storeValue)

    let [minValue, setMinValue] = useState<number>(0)

    let [maxValue, setMaxValue] = useState<number>(10)

    let [isButtonIncDisabled, setIsButtonIncDisabled] = useState<boolean>(false)

    let [isButtonResetDisabled, setIsButtonResetDisabled] = useState<boolean>(true)

    let [isButtonSetDisabled, setIsButtonSetDisabled] = useState<boolean>(true)

    const onClickIncreaseHandler = () => {
        dispatch(increaseCounter())
        setIsButtonResetDisabled(false)
/*        if (typeof value === 'number') {
            setValue(++value)

        }*/
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
        /*localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))*/
        setValue(minValue)
        setIsButtonIncDisabled(false)
    }

    return (
        <div className="App">
            <Counter value={storeValue} maxValue={maxValue} minValue={minValue}
                     onClickIncreaseHandler={onClickIncreaseHandler} onClickResetValueHandler={onClickResetValueHandler}
                     isResetDisabled={isButtonResetDisabled} isIncDisables={isButtonIncDisabled}/>
            <Settings minValue={minValue} maxValue={maxValue} value={value} isSetDisabled={isButtonSetDisabled} onClickSetValueHandler={onClickSetValueHandler} onChangeSetValueHandler={onChangeSetValueHandler}/>
        </div>
    );
}

export default App;
