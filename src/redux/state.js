import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
let store ={
    _state :{
        ProfilePage:{
            postData :[{massege:'Hello, sabaki! Ya naruto uzumaki', kartinka:'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', likes:201},
                {massege:'I wanna end me' ,kartinka:'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP1464-CUSA07669_00-AV00000000000005/1586331489000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000' ,likes:15},
                {massege:'Whats wrong with you?' ,kartinka:"https://i.pinimg.com/originals/a9/d0/96/a9d096ac9430a4f297ed99d42861ae9d.jpg" ,likes:64}],
            newPostText:'I think...'
        },
        MassagePage:{
            masseges :[{text:'Hi there'},{text:'What Am I doing wrong?'},{text:'Nothing. Cant get it'},{text:'Okey'}],
            dialogs :[{name:"Igor", id:1, kartinka:"https://i.pinimg.com/736x/c9/eb/dd/c9ebddca44e1b308c672e641af252be5.jpg"},
                {name:"Nestor", id:2,kartinka:"https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"},
                {name:"Marta" ,id:3,kartinka:"https://hahadu.ru/wp-content/uploads/2019/07/3-20.jpg"},
                {name:"Oleg", id:4,kartinka:"https://focus.ua/storage/pub/images/2017/2615387.jpg"}],
            newSmsText:'Hello'
        }},
_callsubscriber(){
        console.log("State changed");
    },

    getState(){
        return this._state;
    },

subscribe(observe){
        this._callsubscriber= observe;
    },
    dispatch(action){
        

        this._state.ProfilePage=  profileReducer(this._state.ProfilePage, action);
        this._state.MassagePage=  dialogsReducer(this._state.MassagePage, action);
        this._callsubscriber(this._state);
    }

}



export default store;