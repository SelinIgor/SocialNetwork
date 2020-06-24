import React from 'react';
import {connect} from "react-redux";
import {FollowAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, UnfollowAC} from "../../redux/usersReducer";

import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onClickChanged = (p) =>{
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });

    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      onClickChanged={this.onClickChanged}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      following={this.props.following}

        > </Users>
    }
}
let mapStateToProps = (state) =>{
    return {
       users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage:state.UsersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
       following:(usersId)=>{
         dispatch(FollowAC(usersId))
     },
        unfollow:(usersId)=>{
            dispatch(UnfollowAC(usersId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(currentPage)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalUsersCount)=>{
           dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);

