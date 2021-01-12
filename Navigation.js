import React, {useState} from 'react';
import '../styles/style.css';
import {UncontrolledDropdown, Container, Row, Col, Nav, Navbar, NavItem, NavLink, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
// import './fontawesomelibrary';
import { faHome, faInfo, faBars, faEdit, faPlus, faSpellCheck, faPizzaSlice, faLevelUpAlt, faTrophy, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grammatica from './Grammatica';
import Header from './Header';
import {Link } from 'react-router-dom';
class Navigation extends React.Component{
    constructor(props){
    super(props);
    this.toggleGr = this.toggleGr.bind(this);
    this.toggleL = this.toggleL.bind(this);
    this.toggleC = this.toggleC.bind(this);
    this.toggleCL = this.toggleCL.bind(this);
    this.toggleP = this.toggleP.bind(this);
    this.toggleHeader = this.toggleHeader.bind(this);

    this.state = {
        dropdownOpenGr:false,
        dropdownOpenL:false,
        dropdownOpenC:false,
        dropdownOpenCL:false,
        dropdownOpenP:false,
        isHeaderVisible: true
    
    };
}

    toggleHeader(){
     
    this.setState(prevState => ({ 
        isHeaderVisible: !prevState.isHeaderVisible
    }));
            
    }

    toggleGr(){
        this.setState(prevState =>({
            dropdownOpenGr: !prevState.dropdownOpenGr
        }));
    }

    toggleL(){
        this.setState(prevState =>({
            dropdownOpenL: !prevState.dropdownOpenL
        }));
    }
    
    toggleC(){
        this.setState(prevState =>({
            dropdownOpenC: !prevState.dropdownOpenC
        }));
    }
    toggleCL(){
        this.setState(prevState =>({
            dropdownOpenCL: !prevState.dropdownOpenCL
        }));
    }
    toggleP(){
        this.setState(prevState =>({
            dropdownOpenP: !prevState.dropdownOpenP
        }));
    }

    render(){
        return(
            <div>
                <Container fluid="lg">
                    <Row>
                        <Nav className="nav-style">
                            <NavItem className="home"><NavLink href="#"><FontAwesomeIcon className="icon-style" icon={faBars}></FontAwesomeIcon></NavLink></NavItem>
                            <NavItem>
                            <Link to="/" onClick={this.toggleHeader} className="nav-bar-labels"><FontAwesomeIcon icon={faHome} className="icon-style"></FontAwesomeIcon>Home</Link></NavItem>
                            <NavItem>
                            <NavLink className="nav-bar-labels" href="#"><FontAwesomeIcon icon={faInfo} className="icon-style"></FontAwesomeIcon>Chi siamo</NavLink></NavItem>
                            <Dropdown isOpen={this.state.dropdownOpenGr} toggle={this.toggleGr}>
                            <NavItem>
                            <Link to="/grammatica" className="nav-bar-labels"><FontAwesomeIcon icon={faEdit} className="icon-style"></FontAwesomeIcon>
                            <DropdownToggle className="nav-bar-labels nav-bar-label-override" onClick={this.toggleHeader}>
                            Grammatica
                            </DropdownToggle>
                            </Link>
                            <DropdownMenu>
                                <DropdownItem className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Spiegazioni</DropdownItem>
                                <DropdownItem className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Prove</DropdownItem>
                                <DropdownItem className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Esercizi</DropdownItem>
                            </DropdownMenu> 
                            </NavItem>
                            </Dropdown>
                            
                            <Dropdown isOpen={this.state.dropdownOpenL} toggle={this.toggleL}>
                            <NavItem>
                            <Link to="/lessico" className="nav-bar-labels" href="#"><FontAwesomeIcon icon={faSpellCheck} className="icon-style"></FontAwesomeIcon>
                            <DropdownToggle className="nav-bar-labels nav-bar-label-override">Lessico</DropdownToggle>
                            </Link>
                            <DropdownMenu>
                                <DropdownItem className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Situzaioni</DropdownItem>
                                <DropdownItem className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Prove</DropdownItem>
                                <DropdownItem className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Esercizi</DropdownItem>
                                <DropdownItem className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Vocabolario illustrato</DropdownItem>
                                <DropdownItem className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Modi di dire</DropdownItem>
                            </DropdownMenu> 
                            </NavItem>
                            </Dropdown>
                            
                            <Dropdown isOpen={this.state.dropdownOpenC} toggle={this.toggleC}>
                            <NavItem>
                            <Link to="/cultura" className="nav-bar-labels" href="#"><FontAwesomeIcon icon={faPizzaSlice} className="icon-style"></FontAwesomeIcon>
                            <DropdownToggle className="nav-bar-labels nav-bar-label-override">Cultura</DropdownToggle>
                            </Link>
                            <DropdownMenu>
                                <DropdownItem className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Civiltà italiana</DropdownItem>
                                <DropdownItem className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>La cucina italiana</DropdownItem>
                            </DropdownMenu> 
                            </NavItem>
                            </Dropdown>
                            
                            <Dropdown isOpen={this.state.dropdownOpenCL} toggle={this.toggleCL}>
                            <NavItem>
                            <Link to="/competenze-linguistiche" className="nav-bar-labels" href="#"><FontAwesomeIcon icon={faLevelUpAlt} className="icon-style"></FontAwesomeIcon>
                            <DropdownToggle className="nav-bar-labels nav-bar-label-override">Competenze linguistiche</DropdownToggle>
                            </Link>
                            <DropdownMenu>
                                <DropdownItem href="#" className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Prove di grammatica</DropdownItem>
                                <DropdownItem href="#" className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Compressione scritta</DropdownItem>
                                <DropdownItem href="#" className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Situazioni di communicazione</DropdownItem>
                                <DropdownItem href="#"className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Esercizi di riodinamento di testi</DropdownItem>
                            </DropdownMenu> 
                            </NavItem>
                            </Dropdown>

                            <Dropdown isOpen={this.state.dropdownOpenP} toggle={this.toggleP}>
                            <NavItem>
                            <Link to="/prove" className="nav-bar-labels" href="#"><FontAwesomeIcon icon={faTrophy} className="icon-style"></FontAwesomeIcon>
                            <DropdownToggle className="nav-bar-labels nav-bar-label-override">Prove</DropdownToggle>
                            </Link>
                            <DropdownMenu>
                                <DropdownItem className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Prova il tuo italiano</DropdownItem>
                                <DropdownItem className="dropdown-item-style"><FontAwesomeIcon icon={faPlus} className="icon-style"></FontAwesomeIcon>Quanto siete bravi in italiano?</DropdownItem>
                            </DropdownMenu> 
                            </NavItem>
                            </Dropdown>

                            <NavItem>
                            <NavLink className="nav-bar-labels" href="#"><FontAwesomeIcon icon={faIdCard} className="icon-style"></FontAwesomeIcon>Contattaci</NavLink></NavItem>
                            <NavItem></NavItem>
                        </Nav>
                    </Row>
                    
                    <Row className="test6">
                        
                             {this.state.isHeaderVisible ?<Header /> : null}
                       
                    </Row>
                    
                </Container>
                
            </div>
        );
    }
}

export default Navigation;