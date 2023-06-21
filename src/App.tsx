import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Settings} from './components/Settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {StateType} from './bll/store';
import {increaseCounter, resetValueToMinimum} from './bll/counterReducer';
import {editMaxValueSetting, editMinValueSetting, switchEditMode} from './bll/settingsReducer';


function App() {
    const state = useSelector<StateType, StateType>(state => state)
    const dispatch = useDispatch()

    let [isButtonIncDisabled, setIsButtonIncDisabled] = useState<boolean>(false)
    let [isButtonResetDisabled, setIsButtonResetDisabled] = useState<boolean>(false)
    let [isButtonSetDisabled, setIsButtonSetDisabled] = useState<boolean>(true)

    const onClickIncreaseHandler = () => {
        dispatch(increaseCounter())
        setIsButtonResetDisabled(false)
    }

    const onClickResetValueHandler = () => {
        dispatch(resetValueToMinimum(state.settings.minValue))
        setIsButtonResetDisabled(true)
    }

    const onChangeSetValueHandler = (e: ChangeEvent<HTMLInputElement>, setValueCase: 'min' | 'max') => {
        dispatch(switchEditMode(true))
        if (setValueCase === 'min') dispatch(editMinValueSetting(+e.currentTarget.value))
        if (setValueCase === 'max') dispatch(editMaxValueSetting(+e.currentTarget.value))
        setIsButtonIncDisabled(true)
        setIsButtonSetDisabled(false)
        setIsButtonResetDisabled(true)
    }

    const onClickSetValueHandler = () => {
        dispatch(switchEditMode(false))
        dispatch(resetValueToMinimum(state.settings.minValue))
        setIsButtonIncDisabled(false)
    }

    return (
        <div className="App">
            <Counter value={state.counter.value} maxValue={state.settings.maxValue} minValue={state.settings.minValue}
                     onClickIncreaseHandler={onClickIncreaseHandler} onClickResetValueHandler={onClickResetValueHandler}
                     isResetDisabled={isButtonResetDisabled} isIncDisables={isButtonIncDisabled}
                     isEditModeOn={state.settings.isEditModeOn}/>
            <Settings minValue={state.settings.minValue} maxValue={state.settings.maxValue} value={state.counter.value}
                      isSetDisabled={isButtonSetDisabled} onClickSetValueHandler={onClickSetValueHandler}
                      onChangeSetValueHandler={onChangeSetValueHandler} isEditModeOn={state.settings.isEditModeOn}/>
        </div>
    );
}

export default App;
