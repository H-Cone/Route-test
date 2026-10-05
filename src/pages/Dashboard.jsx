    import React from 'react'
    import Signup from './Signup'
import { useParams } from 'react-router-dom'

    const Dashboard = () => {
        const {id} = useParams();
    return (
        <>

        <div className="dashboard-page">

        <div className="welcome">
            <h1>Dashboard</h1>
            <p>Welcome back, Enoch 👋</p>
        </div>

        <div className="stats">

            <div className="stat-card">
            <h3>Level</h3>
            <h2>100</h2>
            <p>Current level</p>
            </div>

            <div className="stat-card">
            <h3>Courses</h3>
            <h2>6</h2>
            <p>Registered courses</p>
            </div>

            <div className="stat-card">
            <h3>GPA</h3>
            <h2>4.25</h2>
            <p>Current GPA</p>
            </div>

            <div className="stat-card">
            <h3>Attendance</h3>
            <h2>92%</h2>
            <p>Overall attendance</p>
            </div>

        </div>

        <div className="dashboard-content">

            <div className="courses-section">
            <h2>My Courses</h2>

            <div className="course">
                <span>CSC 101</span>
                <p>Introduction to Computer Science</p>
            </div>

            <div className="course">
                <span>MTH 101</span>
                <p>Elementary Mathematics</p>
            </div>

            <div className="course">
                <span>GST 101</span>
                <p>Communication in English</p>
            </div>
            </div>

            <div className="upcoming-section">
            <h2>Upcoming</h2>

            <div className="upcoming">
                <h4>CSC 101 Assignment</h4>
                <p>Due October 5</p>
            </div>

            <div className="upcoming">
                <h4>Mathematics Test</h4>
                <p>October 8</p>
            </div>
            </div>

        </div>

        </div>

    );



        </>
    )
    }

    export default Dashboard