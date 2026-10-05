    import React from "react";

    function Results() {
    const results = [
        {
        code: "CSC 101",
        title: "Introduction to Computer Science",
        units: 3,
        grade: "A",
        point: 5.0
        },
        {
        code: "MTH 101",
        title: "Elementary Mathematics",
        units: 3,
        grade: "B",
        point: 4.0
        },
        {
        code: "GST 101",
        title: "Communication in English",
        units: 2,
        grade: "A",
        point: 5.0
        },
        {
        code: "PHY 101",
        title: "Introductory Physics",
        units: 3,
        grade: "B",
        point: 4.0
        },
        {
        code: "STA 101",
        title: "Introduction to Statistics",
        units: 2,
        grade: "A",
        point: 5.0
        }
    ];

    return (
        <div className="results-page">

        <div className="results-header">
            <h1>My Results</h1>
            <p>View your academic performance.</p>
        </div>

        {/* Summary */}

        <div className="result-summary">

            <div className="result-card">
            <span>Semester</span>
            <h2>First Semester</h2>
            </div>

            <div className="result-card">
            <span>GPA</span>
            <h2>4.40</h2>
            </div>

            <div className="result-card">
            <span>Total Units</span>
            <h2>13</h2>
            </div>

        </div>

        {/* Results table */}

        <div className="results-table-container">

            <h2>Academic Results</h2>

            <table>

            <thead>
                <tr>
                <th>Course</th>
                <th>Course Title</th>
                <th>Units</th>
                <th>Grade</th>
                <th>Grade Point</th>
                </tr>
            </thead>

            <tbody>

                {results.map((result) => (
                <tr key={result.code}>
                    <td>{result.code}</td>
                    <td>{result.title}</td>
                    <td>{result.units}</td>
                    <td>
                    <span className="grade">
                        {result.grade}
                    </span>
                    </td>
                    <td>{result.point}</td>
                </tr>
                ))}

            </tbody>

            </table>

        </div>

        </div>
    );
    }

    export default Results;