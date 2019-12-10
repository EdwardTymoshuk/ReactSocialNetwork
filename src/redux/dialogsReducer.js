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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id:6, message: body}]
            };
        default: 
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})
export default dialogsReducer;