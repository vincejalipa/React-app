import React from 'react';
import './App.css';
// import LangList from '../src/json/Languages.json';
import {Col,Row} from 'react-bootstrap/';
import Feed from './Components/feed';
import Trendcard from './Components/trendcard';
import Navigation from './Components/navbar';
import Follow from './Components/follow';
import AutoText from './Components/auto';
import UserCard from './Components/UserCard/index';
import './Auto.css';


function App() { 
  return (
    <div className="App">
        <Navigation />
      <header className="App-body">
        <Row>
          <Col sm="auto">
          <UserCard style={{MarginRight:'20rem'}}
          cardClass='float'
          header='https://i.imgur.com/w5tX1Pn.jpg'
          avatar='https://i.imgur.com/uDYejhJ.jpg'
          name='Jaypsu Lacorte'
          positionName='Senior Software Developer'
          stats={[
            {
              name: 'followers',
              value: 5000
            },
            {
              name: 'following',
              value: 1
            },
            {
              name: 'posts',
              value: 2
            }
          ]}
        /> 
          <Trendcard />
          
        
          </Col>  
            
          <Col sm="6">
          <div className="App-Component"> 
            <div className="App-component">
          <AutoText />
          </div> 
            </div> 
          <Feed />
          </Col>
  
          <Col sm="auto"><Follow /></Col>
        </Row>
      
      </header>
    </div>
  );
}

export default App;
