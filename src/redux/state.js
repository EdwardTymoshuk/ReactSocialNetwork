let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1, message: "Pasasy mij huj", likeCount: 12},
                {id:2, message: "Poshol nahuj", likeCount: 2}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id:1, name: "Bojarskij"},
                {id:2, name: "Rozembaum"},
                {id:3, name: "Leps"},
                {id:4, name: "Butyrka"},
                {id:5, name: "Baskov"},
                {id:6, name: "Kirkorov"}
            ],
            messages: [
                {id:1, message: "Pasasy mij huj"},
                {id:2, message: "Poshol nahuj"},
                {id:3, message: "Pidaras verny babki"},
                {id:4, message: "Zalupu v dupu"},
                {id:5, message: "Pidar"},
                {id:6, message: "Zopa"}
            ]
        }
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        }
    }
}
export default store;