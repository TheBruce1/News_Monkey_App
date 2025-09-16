import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ onSearch }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    }

    const handleCategoryClick = () => {
        setSearchTerm('');
        onSearch('');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fs-3" onClick={handleCategoryClick} to="/general">News Monkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" onClick={handleCategoryClick} to="/general">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" onClick={handleCategoryClick} to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" onClick={handleCategoryClick} to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" onClick={handleCategoryClick} to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" onClick={handleCategoryClick} to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" onClick={handleCategoryClick} to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" onClick={handleCategoryClick} to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" onClick={handleCategoryClick} to="/technology">Technology</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSearch}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar