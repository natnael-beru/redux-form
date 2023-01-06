export const fname = (state ='natanel' ,action) => {
   switch(action.type){
    case "NAME": 
    return action.payload
    default:
        return state
   }
}
export const Lname = (state ='biru' ,action) => {
   switch(action.type){
    case "LNAME": 
    return action.payload
    default:
        return state
   }
}
export const Gender = (state ='Male' ,action) => {
   switch(action.type){
    case "GENDER": 
    return action.payload
    default:
        return state
   }
}
export const Age = (state = 22 ,action) => {
   switch(action.type){
    case "AGE": 
    return action.payload
    default:
        return state
   }
}
export const Profession = (state ='Student' ,action) => {
   switch(action.type){
    case "PROFESSION": 
    return action.payload
    default:
        return state
   }
}