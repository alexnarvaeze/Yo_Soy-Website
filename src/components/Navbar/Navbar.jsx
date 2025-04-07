import logo from '../../assets/logo.png'
import '../Navbar/Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='navbar-content'>
            <img className='navbar-logo' src={logo} />
            <div className='navbar-links'>
                <a href="">services</a>
                |
                <a href="">about us</a>
                |
                <a href="">qualifications</a>
                |
                <a href="">contact us</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar