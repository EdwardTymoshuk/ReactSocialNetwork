import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { undateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer';


const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(item => <DialogItem name={item.name} id={item.id} />)
    let messagesElements = state.messages.map(item => <Message message={item.message}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}              
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea  value={newMessageBody}
                                    onChange={onNewMessageChange}
                                    placeholder="Enter your message..." >
                         </textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
