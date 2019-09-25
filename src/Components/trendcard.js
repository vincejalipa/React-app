import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import  ListGroup  from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';


class Trendcard extends Component {
    state = {  }
    render() { 
        return ( 
            <Card>
            <Card.Header as="h5" style={{textAlign:'center'}}>Trending Right Now</Card.Header>
            <Card.Body>
            <ListGroup style={{fontSize:'12px'}}>
              <ListGroupItem>
              <p>
                <a href="#link">#NBAFinals</a> <br/>
                Raptors vs Warriors 9PM/ET Thursday
              </p>
              </ListGroupItem>
              <ListGroupItem>
              <p>
                <a href="#link">#PacquiaoThurman</a> <br/>
                Pacquiao vs Thurman live from the Garden 5PM/ET
              </p>
              </ListGroupItem>
              <ListGroupItem>
              <p>
                <a href="#link">#SONA2019</a> <br/>
                DU30 on His contorversila SONA
              </p>
              </ListGroupItem>
          
            </ListGroup>
            </Card.Body>
          </Card> );
    }
}
 
export default Trendcard;