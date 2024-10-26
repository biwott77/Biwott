import React, { useState } from 'react';
import './Script.css';

function GradeCalculator() {
    // State to hold the input marks and the grade
    const [marks, setMarks] = useState('');
    const [grade, setGrade] = useState('');

    // Function to calculate the grade based on marks
    const calculateGrade = (event) => {
        event.preventDefault(); // Prevent form submission
        const marksValue = parseFloat(marks);

        // Basic grade calculation logic
        if (marksValue >= 90) {
            setGrade('A');
        } else if (marksValue >= 80) {
            setGrade('B');
        } else if (marksValue >= 70) {
            setGrade('C');
        } else if (marksValue >= 60) {
            setGrade('D');
        } else {
            setGrade('F');
        }
    };

    return (
        <div className="grade-calculator">
            <h1>Grade Calculator</h1>
            <form onSubmit={calculateGrade}>
                <label htmlFor="marks">Enter your marks: </label>
                <input 
                    type="number" 
                    id="marks" 
                    name="marks"
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)} 
                    required
                />
                <br /><br />
                <button type="submit">Calculate Grade</button>
            </form>
            {grade && (
                <div className="result">
                    <h2>Your Grade is: {grade}</h2>
                </div>
            )}
        </div>
    );
}

export default GradeCalculator;
