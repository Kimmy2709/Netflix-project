import React, { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import "./Nav.css";


function Nav(){
    const[show, handleShow] = useState(false);
    const Navigate= useNavigate();

    const transitionNavBar= () => {
        if (window.scrollY > 100){
            handleShow(true);
        } else{
            handleShow(false);

        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return(
        <div className={`nav ${show && "nav-background"}`}>
            <div className="nav-content">
            <img
            onClick={()=>Navigate("/")}
            className="nav-logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
            <img
            onClick={()=> Navigate("/profile") }
             className="nav-avatar" src="https://imageproxy.ifunny.co/noop/user_photos/52a45594277e59076bd7164d352232418a997edf_0.jpg" alt=""/>
            </div>
        
            { /*Banner*/ }
            { /*Row*/ }
        </div>
    );
}

export default Nav;