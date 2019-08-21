const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id:1, message: "Pasasy mij huj", likeCount: 12},
        {id:2, message: "Poshol nahuj", likeCount: 2}
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likeCount: 0
                };
                return {
                        ...state,
                        posts: [...state.posts, newPost],
                        newPostText: ''
                };
    }
        case UPDATE_NEW_POST_TEXT: {
                return {
                        ...state,
                        newPostText: action.text
                };
        }
        default:
                return state;
    }
    }

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        text: text
        })

export default profileReducer;