let rerenderEntireTree = () => {
    console.log('State was changed');
}

let state = {
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;