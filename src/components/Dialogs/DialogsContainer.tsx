import React from 'react'
import { sendMessage, DialogsType, MessagesType } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { AppStateType } from '../../redux/redux-store'
import { compose } from 'redux'

type DialogsPage = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
type MapStateType = {
    dialogsPage: DialogsPage
    isAuth: boolean
}
type MapDispatchType = {
    sendMessage: (newMessaBody: string) => void
}

const DialogsContainer: React.FC<MapStateType & MapDispatchType> = (props) => {
    return (
        <Dialogs {...props}/>
    )
} 

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
    )(DialogsContainer)

