import { storage, fields } from '../../services/localStorage';
import { 
    SET_USER_DATA, 
    SET_TOKEN 
} from '../actions/actionsTypes';

// TO DO: isAuth: true, when the backend will be fixed

const initialState = {
    id: null,
    email: null,
    token: storage.load(fields.token),
    isAuth: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_TOKEN:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    };
};
