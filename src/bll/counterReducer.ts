//reducer
const initialState = {
    value: 0
}

export const counterReducer = (state: CounterDomainType = initialState, action: CounterActionsType) => {
    switch (action.type) {
        case 'INCREASE-COUNTER':
            return {...state, value: state.value + 1}
        case 'RESET-VALUE-TO-MINIMUM':
            return {...state, value: action.minValue}
        default:
            return state
    }
}

//actions
export const increaseCounter = () => ({type: 'INCREASE-COUNTER'} as const)
export const resetValueToMinimum = (minValue: number) => ({type: 'RESET-VALUE-TO-MINIMUM', minValue} as const)

//types
type CounterDomainType = { value: number }
type CounterActionsType = ReturnType<typeof increaseCounter> | ReturnType<typeof resetValueToMinimum>