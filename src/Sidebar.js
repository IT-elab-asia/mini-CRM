import React from 'react';
import { Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="logo">
              <a href="/" className="nav-link">
               
                <span className="link-text logo-text">WorkApp</span>
                
                
              </a>
            </li>
            <Link to="/list_projects" className="nav-item">
                <a className="nav-link">
                    <img className="nav-icon" src={require('./images/Sidebar/calendar.svg').default} alt="" />
                    <span className="link-text">Проекты</span>
                </a>
            </Link>
            <Link to="/profile" className="nav-item">
              <a href="#" className="nav-link">
                <img className="nav-icon" src={require('./images/Sidebar/user.svg').default} alt="" />
               <span className="link-text">Профиль</span>
              </a>
            </Link>
          </ul>
        </div>
    );
};

export default Sidebar;