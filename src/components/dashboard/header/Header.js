import './Header.css';
const Header = (props) => {
    return(
        <div className="header">
            <div className="toggle-btn">
            </div>
            <p>Welcome sai You have <span>Notifications (1)</span> <em>Inbox</em> <span>(0 new)</span></p>
        </div>
    )
}
export default Header;