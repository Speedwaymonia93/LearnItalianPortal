import React from 'react'
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import '../styles/style.css';
import italy from '../icons/italy.svg';
import pasta from '../icons/pasta.svg';
import rome from '../icons/rome.svg';
import venice from '../icons/venice.svg';
import italy2 from '../icons/italy2.svg';
import italycopy from '../icons/italy4.svg';

class Header extends React.Component{
    constructor(){
        super();
    }
    
    render(){
        return(
            <div className="header-style-expand">  
                <header className="jumbotron header-style">
                       {/* <Container fluid="lg">*/} 
                            <Row className="justify-content-center align-items-center">
                                <Col lg="2"><img className="icon-style-header" src={italy}/></Col>
                                <Col lg="2"><img className="icon-style-header" src={pasta}/></Col>
                                <Col lg="4">
                                    <Row><h3>Impara Italiano e svolgi tutte le competenze linguistiche</h3></Row>
                                    <Row>
                                        <Col><img className="icon-style-header" src={rome}/></Col>
                                        <Col><img className="icon-style-header" src={venice}/></Col>
                                    </Row>
                                </Col>
                                <Col lg="2"> <img className="icon-style-header" src={italy2}/></Col>
                                <Col lg="2"><img className="icon-style-header" src={italycopy}/></Col>
                            </Row>
                         {/*</Container>*/} 
                    
                </header>
            </div>
        )
    }
}


export default Header