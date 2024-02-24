import { useNavigate, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect,useRef, useState } from 'react';


const Navbar = ( { searchText, setSearchText }) => {

    const searchInputRef = useRef(null);
    const location = useLocation();
  
    useEffect(() => {
      if (location.pathname === '/search') {
        searchInputRef.current.focus();
      }
    }, [location.pathname]);

    const navigate = useNavigate()

    const updateSearchText = (e) => {
        setSearchText(e.target.value);
        if (e.target.value.trim() !== '') {
            navigate('/search');
        }
    }
    
    
    const handleEventChange = (e) => {
        e.preventDefault();
        if (searchText.trim() !== '') {
            navigate('/search');
        }
        setSearchText('')
    }

    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Movies Browser</Link>
            <button className="navbar-toggler" type="button" onClick={handleToggle} aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-disabled="true" to="/comingsoon">Coming Soon</Link>
                    </li>
                </ul>
                <form className="d-flex mt-2 mt-lg-0" role="search" onSubmit={handleEventChange}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={updateSearchText} ref={searchInputRef}/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

)
}

export default Navbar;
