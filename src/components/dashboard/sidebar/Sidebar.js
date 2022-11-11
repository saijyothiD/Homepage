import {  NavLink } from "react-router-dom";
import SidebarItems, { SidebarBottomItems } from "./SidebarItems";
import { FaAngleLeft } from "react-icons/fa";
import './Sidebar.css';
import MenuToggleButton from "./SideMenu";

const Sidebar = (props) => {
    return(
        <>
            <div className="toggle-btn">
                <MenuToggleButton click={props.drawerToggleClickHandler} />
            </div>
            <div className="side_nav side_nav_icon">
                {
                    SidebarItems.map((item, index)=> {
                        return (
                            <div key={index}>
                            <NavLink to={item.path}><FaAngleLeft /> {item.name}</NavLink>
                            </div>
                        );
                    })
                }
            </div>
            <div className="side_nav">
                {
                    SidebarBottomItems.map((item, index)=> {
                        return (
                            <div key={index}>
                            <NavLink to={item.path}><FaAngleLeft /> {item.name}</NavLink>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}
export default Sidebar;