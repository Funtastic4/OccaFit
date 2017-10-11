import React, { Component } from 'react';
import { Container, Image, List } from 'semantic-ui-react';

class ProfilePic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{margin: '30px'}}>

        <Image src={this.props.user} size='small' shape='circular' centered style={{margin: 'auto'}} />
      
        <Container style={{"textAlign": "center"}}>
          <List style={{margin: '10px'}}>
            <List.Item>
              <List.Header>{this.props.details}</List.Header>
            </List.Item>
          </List>
        </Container>

      </Container>
    );
  }
}

export default ProfilePic;
