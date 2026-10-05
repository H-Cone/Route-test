    import React from "react";

    function Courses() {
    const courses = [
        {
        code: "CSC 101",
        title: "Introduction to Computer Science",
        lecturer: "Dr. Adewale",
        units: 3,
        progress: "75%"
        },
        {
        code: "MTH 101",
        title: "Elementary Mathematics",
        lecturer: "Mr. Johnson",
        units: 3,
        progress: "60%"
        },
        {
        code: "GST 101",
        title: "Communication in English",
        lecturer: "Mrs. Williams",
        units: 2,
        progress: "85%"
        },
        {
        code: "PHY 101",
        title: "Introductory Physics",
        lecturer: "Dr. Ibrahim",
        units: 3,
        progress: "50%"
        }
    ];

    return (
        <div className="courses-page">

        <div className="courses-header">
            <h1>My Courses</h1>
            <p>View your registered courses for this semester.</p>
        </div>

        <div className="courses-grid">

            {courses.map((course) => (
            <div className="course-card" key={course.code}>

                <div className="course-top">
                <span className="course-code">
                    {course.code}
                </span>

                <span className="course-unit">
                    {course.units} Units
                </span>
                </div>

                <h2>{course.title}</h2>

                <p className="lecturer">
                Lecturer: {course.lecturer}
                </p>

                <div className="progress-info">
                <span>Progress</span>
                <span>{course.progress}</span>
                </div>

                <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: course.progress }}
                ></div>
                </div>

            </div>
            ))}

        </div>

        </div>
    );
    }

    export default Courses;