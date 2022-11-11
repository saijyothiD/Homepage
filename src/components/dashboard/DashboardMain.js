import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Routing from '../Routing';
import Backdrop from './Backdrop/BackDrop';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import SideDrawer from './sidebar/SideDrawer';
const DashboardMain = () => {
    const [sidecontent, setSideContent] = useState(false);
    const drawerToggleClickHandler= () => {
        setSideContent(prevState => {
        return { sideDrawerOpen: !prevState.sideDrawerOpen };
        })
    }
    const backDropClickHandler = () => {
        setSideContent({ sideDrawerOpen: false });
    };
    
    let backdrop;

    if (sidecontent.sideDrawerOpen) {
        // sideDrawer = <SideDrawer />;
        backdrop = <Backdrop click={backDropClickHandler} />;
    }
    return(
        <>
            <Header />
            <SideDrawer show={sidecontent.sideDrawerOpen} />
            {backdrop}
            <Row>
                <Col  md={4} lg={3}>
                <Sidebar drawerToggleClickHandler={drawerToggleClickHandler} />
                </Col>
                <Col  md={8} lg={9}>
                <Routing />
                </Col>
            </Row>
        </>
    )
}
export default DashboardMain;