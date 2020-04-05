import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './redux/appReducer';
import { compose } from 'redux';
import {withRouter} from 'react-router-dom';
import Preloader from './components/common/preloader/Preloader';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render(){
    if(!this.props.initialized) {
      return <Preloader />
    } 
    return (
      <div className="app">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
          <Route path="/dialogs" render={() => <DialogsContainer />}/>
          <Route path="/users" render={() => <UsersContainer pageTitle={'Users'}/>} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />}/>
          <Route path="/settings" render={() => <Settings />}/>
          <Route path="/login" render={() => <Login />}/>
          
        </div>
    </div>
  );}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
