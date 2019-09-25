import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';
import {ScrollPanel} from 'primereact/scrollpanel';



class Follow extends Component {

  constructor() {
		super();
		this.state = {
			val1: null,
			val2: null
		};
	}
  
    state = {  }
    render() { 
        return ( <Card style={{ width:'300px', color:'black'}}>
        <Card.Header style={{textAlign:'center'}}>Who to Follow</Card.Header>
        <ScrollPanel>
        <ListGroup variant="flush">
  <ListGroup.Item>
  <Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src="http://ugra2015.com/wp-content/uploads/2014/06/16.jpg"
  />
  <Media.Body>
    <h5>John Doe</h5>
    <p style={{fontSize:'12px'}}>
    Followed By: @JaneDoe, @JohnDoes, @Japysu <br/>
    <Button variant="outline-info">Follow</Button>
    </p>
  </Media.Body>
</Media>
</ListGroup.Item>
          
<ListGroup.Item>
<Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src="https://cdn.selise.biz/slnetwork/assets/customer_logo/random-user_imageF15.jpg"
  />
  <Media.Body>
  <h5>Jane Doe</h5>
    <p style={{fontSize:'12px'}}>
    Followed By: @JaneDoe, @JohnDoes, @Japysu <br/>
    <Button variant="outline-info">Follow</Button>
    </p>
  </Media.Body>
</Media>
</ListGroup.Item>

<ListGroup.Item>
<Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src="https://luzdaconsciencia.com.br/assets/admin/app/img/user/03.jpg"
  />
  <Media.Body>
  <h5>Jane Does</h5>
    <p style={{fontSize:'12px'}}>
    Followed By: @JaneDoe, @JohnDoes, @Japysu <br/>
    <Button variant="outline-info">Follow</Button>
    </p>
  </Media.Body>
</Media>
</ListGroup.Item>

</ListGroup>
</ScrollPanel>
      </Card> );
    }
}
 
export default Follow;