import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div>
    <ul>
      <li>
        <Link to="/three">ThreeJs</Link>
      </li>
      <li>
        <Link to="/react-fiber">React Three Fiber</Link>
      </li>
    </ul>
  </div>
  );
};

export default Navbar;
