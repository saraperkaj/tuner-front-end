import { Link } from 'react-router-dom';

const NavBar = () => {
  return <nav className='nav'>
    <Link className='home-link' to="/">Home</Link> 
    <Link className='songs-link' to="/songs">Songs</Link>
  </nav>
};

export default NavBar;
