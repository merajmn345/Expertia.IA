import {NavLink} from 'react-router-dom';
import '../components/Navbar.css';

const Navbar =()=>{
    return(
        <>
        <div className='container-fluid '>
            <div className='row header'>
                <div className='col-md-5 logo-title'>
                   <div className='logo'></div>
                   <h5>Experties</h5>
                </div>
                <div className='col-md-5 nav'>
                    <NavLink exact activeClassName="active_class" to='/'>AboutUs</NavLink>
                    <NavLink exact activeClassName="active_class" to='/contact'>ContactUs</NavLink>
                    <NavLink exact  to='/signup'><button className="SignUp-btn">SignUp</button></NavLink>
                </div> 
            </div>
        </div>
        </>
    )
}
export default Navbar;