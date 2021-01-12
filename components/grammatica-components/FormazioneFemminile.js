import React from 'react'
import '../../styles/grammatica-style.css';
import {Container, Row, Col} from 'reactstrap';
class FormazioneFemminile extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <Container>
            <Row>
            <Col lg="12" id="ex-list">
                <ul class="ex-style">
                    <li class="ex-item-style"><a className="gr-link-style" href="#">1</a></li>
                    <li class="ex-item-style"><a className="gr-link-style" href="#">2</a></li>
                    <li class="ex-item-style"><a className="gr-link-style" href="#">3</a></li>
                    <li class="ex-item-style"><a className="gr-link-style" href="#">4</a></li>
                </ul>
            </Col>
        </Row>
            <Row id="ex1">
            <div class="col-12">
                <h4>Exercizio 1</h4>
                <form>
                    <ol class="ex-list-style">
                        <li class="ex-list-item-style">principe: <input type="text" className="input-style"/></li>
                        <li class="ex-list-item-style">avvocato: <input type="text"className="input-style"/></li>
                        <li class="ex-list-item-style">lettore: <input type="text" className="input-style"/></li>
                        <li class="ex-list-item-style">nuotatore: <input type="text" className="input-style"/></li>
                        <li class="ex-list-item-style">pastore: <input type="text" className="input-style"/></li>
                        <li class="ex-list-item-style">dottore: <input type="text" className="input-style"/></li>
                        <li class="ex-list-item-style">difensore: <input type="text" className="input-style" /></li>
                        <li class="ex-list-item-style">possessore: <input type="text"className="input-style"/></li>
                        <li class="ex-list-item-style">vigile: <input type="text" className="input-style"/></li>
                        <li class="ex-list-item-style">seduttore: <input type="text" className="input-style"/></li>
                    </ol>
                </form>
            </div>
            </Row>
            
            </Container>
            
        )
    }
}

export default FormazioneFemminile