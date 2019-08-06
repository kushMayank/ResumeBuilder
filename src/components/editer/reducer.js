const initState = {
    resume:[]
}

const reducer = (state = initState, action)=>{
    switch(action.type){
        case "SET_RESUME" :
            return {...state, resume: [...state.resume,action.data]}
        default :
            return state    
    }
}

export default reducer;