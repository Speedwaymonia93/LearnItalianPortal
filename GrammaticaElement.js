import React from 'react';
import {Container} from 'reactstrap';
import GrammaticaEsercizii from '../files/GrammaticaEsercizii.json';
import '../styles/grammatica-style.css';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
class GrammaticaElement extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
            <ul class="list-style">
                   {
                        GrammaticaEsercizii.map((grElement)=>{
                            return(
                                <div>
                                    <li className="list-element-style" key={grElement.id}>
                                        <a href="#" className="gr-link-style">
                                        {grElement.title} ({grElement.count})</a>
                                    </li>
                                </div>
                            )
                        })
                   }
                    
                </ul>
            </div>
           
                
        )
    }
}


export default GrammaticaElement