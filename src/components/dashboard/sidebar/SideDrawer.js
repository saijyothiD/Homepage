import React from "react";
import { NavLink } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";
import './Sidebar.css';
import SidebarItems, { SidebarBottomItems } from "./SidebarItems";

const SideDrawer = props => {
  let drawerClasses = ["side-drawer"];

  if (props.show) {
    drawerClasses = ["side-drawer", "open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
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
    </nav>
  );
};
export default SideDrawer;
