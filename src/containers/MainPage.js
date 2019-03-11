import React, { Component } from 'react';
import Main from '../components/Main';
import TopActionBar from '../components/TopActionBar'
import MobileHeader from '../components/MobileHeader';
class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(<div className='mainpage-container'>
        <TopActionBar heading='Yogesh Kumar'/>
        <Main users={this.props.users && this.props.users}/>
    </div>);
    }
}
export default MainPage;
