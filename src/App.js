import React from 'react';
import './App.css';
import Button from './components/Button'
import Profile from './components/Profile'
import Appbar from './components/Appbar'
class App extends React.Component {
  state={
    user:{},
    isAnimate:false,
    isShowData:false
  }
  
  onHandleSubmit=()=>{
    fetch(`https://randomuser.me/api/`)
    .then(res=>res.json())
    .then(res=>{
      const data=res.results[0]
      const newUser={
        name:data.name.first + ' ' +data.name.last,
        email:data.email,
        contact:data.phone,
        location:data.location.city,
        dob:data.dob.date,
        password:data.login.password,
        picture:data.picture.large
      }
      this.setState({
      user:newUser,
      isShowData:true,
      isAnimate:true,
    })
    }
    )
    .catch(e=>console.log(e));
    this.setState({
      isAnimate:false
    })
  }


  render(){
    console.log(this.state.user)
    return (
      <div className="App">
          <Appbar/>
          {this.state.isShowData && <Profile isAnimate={this.state.isAnimate} user={this.state.user}/> }
          <Button onHandleSubmit={this.onHandleSubmit}/>
          
      </div>
    );
  }
  
}

export default App;
