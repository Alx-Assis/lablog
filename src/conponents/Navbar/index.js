import React,{Component} from "react";

import "./style.css";

class NavBar extends Component{
    render(){
        return(
            <nav className="styleNavBar">
                <ul>
         <li> <button><a href="https://www.facebook.com/leasimplesmentetudo"> L&A Simplesmente Tudo</a></button></li>
         <li> <button><a href="https://www.facebook.com/Perfeitamente-Imperfeita-107238681186217">Perfeitamente Perfeita</a></button></li>
          </ul>
           </nav>
        );
    }
}
export default NavBar;