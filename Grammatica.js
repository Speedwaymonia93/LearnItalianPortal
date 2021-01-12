import React from 'react'
import '../styles/grammatica-style.css';
import {Container, Row, Col} from 'reactstrap';
import interpretation from '../icons/interpretation.svg';
import testCopy from '../icons/test copy.svg';
import running from '../icons/running.svg';
import GrammaticaElement from '../components/GrammaticaElement';
import FormazioneFemminile from './grammatica-components/FormazioneFemminile';
class Grammatica extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="header-gr-style"> 
                <header className="jumbotron header-style">
                <Container fluid="lg">
                    <Row className="justify-content-center align-items-center">
                        <Col lg="3">
                        <h2>Grammatica</h2>
                        <h4>Impara, esercita e prova</h4>
                        </Col>
                        
                        <Col lg="3">
                            <Col className="section-style"><img src={interpretation} class="img-style"/></Col>
                            <Col className="section-style"><h5>Spiegazioni</h5></Col>
                        </Col>

                        <Col lg="3">
                            <Col className="section-style"><img src={testCopy}class="img-style"/></Col>
                            <Col className="section-style"><h5>Prove</h5></Col>
                        </Col>

                        <Col lg="3">
                            <Col className="section-style"><img src={running}class="img-style"/></Col>
                            <Col className="section-style"><h5>Esercizii</h5></Col>
                        </Col>
                    </Row>                
                </Container>
            </header>
            <main>
            <Container> 
                <Row className="test">
                    <div id="esercizii">
                        <GrammaticaElement />
                    </div>
                </Row>
               
        {/*  
                <Row>
                    <FormazioneFemminile />
                </Row>
                */}
            </Container>
            </main>
            
            </div>
            
        )
    }
    
}

export default Grammatica