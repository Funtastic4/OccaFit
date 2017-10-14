import React from 'react'
import { Icon, Item, Divider } from 'semantic-ui-react'


const FriendEntry = (props) => (

    <Item verticalAlign="middle">
      <Item.Content verticalAlign='middle'>
      <Item.Image onClick={() => {props.handleUserClick(props.user)}}
      			  size='tiny'
      			  src={props.user.imageUrl}
      			  id="friendImage"
      			  shape='circular'/>
      </Item.Content>
      <Item.Content>
      {console.log("yoooooooooo",props)}
        <Item.Header id="friendName">
            {props.user.name}
        </Item.Header>
      </Item.Content>
    </Item>

)

export default FriendEntry
