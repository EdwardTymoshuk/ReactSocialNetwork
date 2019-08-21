const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body}
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id:6, message: body}]
            };
        default: 
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const undateNewMessageBodyCreator = (body) => ({
        type:  UPDATE_NEW_MESSAGE_BODY,
        body: body
})

export default dialogsReducer;