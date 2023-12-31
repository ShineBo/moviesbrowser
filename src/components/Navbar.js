import { useNavigate, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect,useRef } from 'react';


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
        setSearchText(e.target.value)
    }

    const handleEventChange = (e) => {
        e.preventDefault()
        navigate('/search')
    }


return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">Movies Browser</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
            <form className="d-flex" role="search" onSubmit={handleEventChange}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={updateSearchText} ref={searchInputRef}/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
)
}

export default Navbar;
