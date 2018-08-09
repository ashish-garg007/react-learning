import {PROFILE} from '../constant/action-type';

const initialState = {
    profile: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case PROFILE:
        return {...state, profile: action.payload}
        default:
        return state;
    }
};

export default profileReducer;