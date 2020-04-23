import { sendMessage, DialogsType, MessagesType } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from '../../../../../../Library/Caches/typescript/3.5/node_modules/redux'
import { AppStateType } from '../../redux/redux-store'

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
type OwnPropsType = {

}

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect<MapStateType, MapDispatchType, OwnPropsType, AppStateType>(mapStateToProps, {sendMessage}),
    withAuthRedirect
    )(Dialogs)

