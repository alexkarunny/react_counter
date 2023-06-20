


//reducer
const initialState = {
    value: 5
}

export const counterReducer = (state: CounterDomainType = initialState, action: CounterActionsType) => {
    switch (action.type) {
        case 'INCREASE-COUNTER':
            return {...state, value: state.value + 1}
    }
    return state
}

//actions
export const increaseCounter = () => ({type: 'INCREASE-COUNTER'})

//types
type CounterDomainType = typeof initialState
type CounterActionsType = ReturnType<typeof increaseCounter>