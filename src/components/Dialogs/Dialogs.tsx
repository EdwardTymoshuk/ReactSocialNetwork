import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { AddMessageFormRedux } from './Message/AddMessageForm';
import { DialogsType, MessagesType } from '../../redux/dialogsReducer'

type DialogsPage = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

type PropsType = {
    dialogsPage: DialogsPage

    sendMessage: (newMessageBody: string) => void
}

const Dialogs: React.FC<PropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(item => <DialogItem name={item.name} id={item.id} />)
    let messagesElements = props.dialogsPage.messages.map(item => <Message message={item.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBody;

    let addNewMessage = (value: any) => {
        props.sendMessage(value.newMessageBody);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}              
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}
export default Dialogs;
