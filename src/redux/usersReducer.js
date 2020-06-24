const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT ="SET_TOTAL_USERS_COUNT";

let InitialState ={
users:[],
pageSize: 5,
totalUsersCount: 30,
currentPage:1
};


let usersReducer=(state = InitialState,action)=> {
    switch (action.type) {
        case FOLLOW:{
            return{
                ...state,
                users: state.users.map(u=>{
                    if(u.id===action.usersId){
                        u={...u, followed: true}
                    }
                    return u;
                })

            }
        }
        case UNFOLLOW:{
            return{
                ...state,
                users: state.users.map(u=>{
                    if(u.id===action.usersId){
                        u={...u, followed: false}
                    }
                    return u;
                })

            }
        }
        case SET_USERS:{
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT:{
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        default:
            return state;
    }
}

export const FollowAC=(usersId)=>{
    return{type: FOLLOW, usersId}

}
export const UnfollowAC=(usersId)=>{
    return{type: UNFOLLOW, usersId}
}
export const setUsersAC=(users)=>{
    return{type: SET_USERS,users}
}
export const setCurrentPageAC=(currentPage)=>{
    return{type: SET_CURRENT_PAGE, currentPage}
}
export const setTotalUsersCountAC=(totalUsersCount)=>{
    return{type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}
export default usersReducer;