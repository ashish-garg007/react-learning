import {TOKEN} from '../constant/action-type';

const initialState = {
    token: ''
}

const tokenReducer = (state = initialState, action) => {
    switch(action.type){
        case TOKEN:
        return {...state, token: action.payload}
        default:
        return state;
    }
};

export default tokenReducer;