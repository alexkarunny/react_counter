//reducer
const initialState: SettingsDomainType = {
    minValue: 0,
    maxValue: 10,
    isEditModeOn: false
}

export const settingsReducer = (state: SettingsDomainType = initialState, action: SettingsActionsType): SettingsDomainType => {
    switch (action.type) {
        case 'EDIT-MIN-VALUE-SETTING':
            return {...state, minValue: action.minValue}
        case 'EDIT-MAX-VALUE-SETTING':
            return {...state, maxValue: action.maxValue}
        case 'SWITCH-EDIT-MODE':
            return {...state, isEditModeOn: action.editMode}
        default:
            return state
    }
}

//actions
export const editMinValueSetting = (minValue: number) => ({type: 'EDIT-MIN-VALUE-SETTING', minValue} as const)
export const editMaxValueSetting = (maxValue: number) => ({type: 'EDIT-MAX-VALUE-SETTING', maxValue} as const)
export const switchEditMode = (editMode: boolean) => ({type: 'SWITCH-EDIT-MODE', editMode} as const)

//types
export type SettingsDomainType = {
    minValue: number
    maxValue: number
    isEditModeOn: boolean
}
export type SettingsActionsType =
    ReturnType<typeof editMinValueSetting>
    | ReturnType<typeof editMaxValueSetting>
    | ReturnType<typeof switchEditMode>