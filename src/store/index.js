import {createStore} from 'redux';
import rootReducer from '../reducers';
import {loadState,saveState} from '../localStorage';

const persistedState = loadState();
const store = createStore(rootReducer,persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() =>{
    saveState({
        token:{ token: store.getState().token.token},
        profile:{profile: store.getState().profile.profile}
    });
});
export default store;