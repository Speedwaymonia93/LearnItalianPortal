import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import menuTiles from '../files/menuTiles.json';
import '../styles/style.css';
import { Link } from 'react-router-dom';

function Menu(){
    
    return (
        <main>
            <div className="container fluid">
                <div className="row justify-content-center"><h3>Scegli il menu oppure cercha qui per categorie</h3></div>
                <div className="div-menu-style">
                    {
                        menuTiles.map((menuDetail)=>{
                            const imgSrc = [];
                            imgSrc.push(menuDetail.imgSrc);
                            
                            return(
                                <div key={menuDetail.id}>
                                <div className="link-style">
                                    <div className="tile-style row">
                                    <div col="3"><img className="img-style" src={ menuDetail.imgSrc} width="30" height="30"/></div>
                                    <div col="9">
                                    <h4>{menuDetail.title}</h4>
                                    <p>{menuDetail.content}</p>
                                    </div>
                                    </div>
                                </div>
                              
                            </div>
                        
                            )
                            
                        })
                    }
                </div>
            </div>
        </main>
    )
}
export default Menu