// export const initialState ={
//    buglist:[],
//     user:null,
// };
// const reducer = (state,action) => {
//     console.log(action);
//     switch(action.type){
//         case 'ADD_TO_BUGLIST':
//             return {
//                 ...state,
//                 buglist:[...state.buglist,action.item],
//             };
//        case 'REMOVE_FROM_BUGLIST':
           
            
//                 const index = state.buglist.findIndex((basketItem) => buglist._id=action.id );
//                 let newBasket = [...state.buglist];
//                 if (index >=0){ newBasket.splice(index,1);

//                 }
//                 else{
//                 console.warn("Can't remove product as it is not in the basket")}
//                 return{
//                     ...state,
//                     buglist:newBuglist
//                 }
//             }}