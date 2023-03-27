import React, {useState} from 'react';
import './App.css';

function App() {
    let [value, setValue] = useState<number>(0)

    const onClickIncreaseHandler = () => {
        setValue(++value)
    }

    const onClickResetValueHandler = () => {
        setValue(0)
    }

    return (
        <div className="App">
            <div className={value === 5 ? 'red' : ''}>{value}</div>
            <button onClick={onClickIncreaseHandler} disabled={value === 5}>+</button>
            <button onClick={onClickResetValueHandler}>reset</button>
        </div>
    );
}

export default App;
