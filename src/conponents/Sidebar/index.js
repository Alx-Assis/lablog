import React,{Component} from "react";
import Imgbar from "../../assets/Ellipse.png";

import "./style.css";

class SideBar extends Component{
    render(){
        return(
            <div className="styleSidebar">
            <img src={Imgbar}></img>
            <section>
                <h1>Leticia Ferreira </h1>
                <p>In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.</p>
            </section>
            </div>
        );
    }
}
export default SideBar;
        