import React, { Component } from 'react';
import LoginButtonModal from './LoginButtonModal.js';
import { Menu, Input, Button, Dropdown } from 'semantic-ui-react';
import { NavLink, Link, Redirect } from 'react-router-dom';

class MainNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: ''
    };
    this.searchUser = this.searchUser.bind(this);
  }

  getSearchOptions() {
    fetch('/search')
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState({
          options: response
        })
      })
  };

  searchUser(event, data){
    var userId = data.value;
    //var path = '/profile/' + data.value;
    fetch('/search/user', {credentials: 'include', headers: {userId: this.props.user.id}})
      .then(response => {
        console.log(response)
      })
  };

  signOutRedirect = () => {}

  componentDidMount() {
    this.getSearchOptions();
  };

  render() {
    return (
      <Menu secondary size='huge' style={{marginBottom: 0}}>
        <Menu.Item exact name='home' as={NavLink} to='/' />
        <Menu.Item name='listings' as={NavLink} to='/listings' />
        <Menu.Item name='about' as={NavLink} to='/about' />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Dropdown placeholder='Search Users' fluid search selection options={this.state.options} style={{width: "250px"}} onChange={this.searchUser}/>
          </Menu.Item>

          {!this.props.isAuthed && ([
            <Menu.Item style={{paddingLeft: '0px'}}>
              {/*<Button content='Log In' onClick={this.handleLoginClick} /> */}
              {/*<LoginButtonModal authenticate={this.props.authenticate}/> */}
              <Button as={Link} to='/login' content='Log In' />
            </Menu.Item>,
            <Menu.Item style={{paddingLeft: '0px'}}>
              <Button as={Link} to='/signup' primary content='Sign Up' />
            </Menu.Item>
          ])}

          {this.props.isAuthed && ([
            <Menu.Item style={{paddingLeft: '0px'}}>
              <Button as={Link} to='/create' primary content='Create Listing' />
            </Menu.Item>,
            <Dropdown text={this.props.user.name} className='link item' pointing>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/dashboard'>Dashboard</Dropdown.Item>
                <Dropdown.Item as={Link} to='/profile'>Profile</Dropdown.Item>
                <Dropdown.Item>Referral</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={this.props.signoff} as={Link} to='/'>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ])}
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MainNav;
