export const loadState = () =>{
    try{
        const serilaizedState = localStorage.getItem('state');
        if(serilaizedState === null){
            return undefined;
        }
        return JSON.parse(serilaizedState);
    }catch(err){
        console.log(err);
        return undefined;
    }
}

export const saveState = (state) =>{
    try{
        const serilaizedState = JSON.stringify(state);
        localStorage.setItem('state',serilaizedState);
    }catch(err){
        console.log(err);
    }
}