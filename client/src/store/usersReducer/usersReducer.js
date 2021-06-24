const initialState = []

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USERS':
            return action.payload
        default:
            return state
    }
}