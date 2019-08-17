import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogs.map(item => <DialogItem name={item.name} id={item.id} />)
    let messagesElements = props.state.messages.map(item => <Message message={item.message}/>
    )
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}              
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>

        </div>
    )
}
export default Dialogs;
