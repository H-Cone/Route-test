import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Profile from './pages/Profile';

const Sidebar = ({ user, setUser }) => {
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem('currentUser');

        if (typeof setUser === 'function') {
            setUser(null);
        }

        navigate('/signin', { replace: true });
    };

    return (
        <>
            <aside className='sideBar'>
                <h1 className='logo'>🎓 Student Portal</h1>

                <nav className='sidebarNav'>
                    <NavLink to={'/dashboard'} end className={'navlink'}>
                        <i className="bi bi-house-door"></i>
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink className={'navlink'} to={'profile'}>
                        <i className='bi bi-person'></i>
                        <span>My Profile</span>
                    </NavLink>

                    <NavLink className={'navlink'} to={'courses'}>
                        <i className='bi bi-book'></i>
                        <span>Courses</span>
                    </NavLink>

                    <NavLink className={'navlink'} to={'results'}>
                        <i className='bi bi-bar-chart'></i>
                        <span>Results</span>
                    </NavLink>
                </nav>

                <div className='logout'>
                    <button type='button' className='navlink logout-btn' onClick={handleLogOut}>
                        <i className='bi bi-box-arrow-right'></i>
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
        </>
    );
}

export default Sidebar