    import React from "react";
import { useParams } from "react-router-dom";

    function Profile() {
        const {id} = useParams();
    return (
        <div className="profile-page">

        <div className="profile-header">
            <h1>My Profile</h1>
            <p>View your student information</p>
        </div>

        <div className="profile-card">

            <div className="profile-top">
            <div className="profile-avatar">
                EA
            </div>

            <div>
                <h2>{id}</h2>
                <p>Computer Science</p>
            </div>
            </div>

            <div className="profile-details">

            <div className="detail">
                <span>Full Name</span>
                <strong>Enoch Adegbola</strong>
            </div>

            <div className="detail">
                <span>Student ID</span>
                <strong>LAU/CSC/001</strong>
            </div>

            <div className="detail">
                <span>Email</span>
                <strong>enoch@example.com</strong>
            </div>

            <div className="detail">
                <span>Department</span>
                <strong>Computer Science</strong>
            </div>

            <div className="detail">
                <span>Level</span>
                <strong>100 Level</strong>
            </div>

            <div className="detail">
                <span>Academic Session</span>
                <strong>2025/2026</strong>
            </div>

            </div>

        </div>

        </div>
    );
    }

    export default Profile;