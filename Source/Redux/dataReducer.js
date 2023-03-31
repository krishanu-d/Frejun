const initialState = {
    list: [],
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddData':
            return {
                ...state,
                list: action.payload
            }
        case 'ClearData':
            return {
                ...state,
                list: action.payload
            }

        default: {
            return state;
        }
    }
};

export default dataReducer;