const SEND_MESSAGE = 'SEND_MESSAGE'

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        { id: 1, name: "Bojarskij" },
        { id: 2, name: "Rozembaum" },
        { id: 3, name: "Leps" },
        { id: 4, name: "Butyrka" },
        { id: 5, name: "Baskov" },
        { id: 6, name: "Kirkorov" }
    ] as Array<DialogsType>,
    messages: [
        { id: 1, message: "Hello, how are You ?" },
        { id: 2, message: "Hi! Nice to see you." },
        { id: 3, message: "Hola!" },
        { id: 4, message: "Hello!!!" },
        { id: 5, message: "Hey, wat`s up ?" },
        { id: 6, message: "Hellllo///" }
    ] as Array<MessagesType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }]
            }
        default:
            return state
    }
}

type ActionTypes = SendMessageCreatorActionType

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
export const sendMessage = (newMessageBody: string): SendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer