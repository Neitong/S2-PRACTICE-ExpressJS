// server.js
import express from 'express';
import courses from "./course.js";
import { requestLogger } from './middleware/logger.js';
import { validateQueryParams } from './middleware/validateQuery.js';
import { authenticateToken } from './middleware/authentication.js';
const app = express();
const PORT = 3000;

// Middleware to log requests
app.use(requestLogger);

// Route: GET /departments/:dept/courses
app.get('/departments/:dept/courses',
    validateQueryParams,
    authenticateToken,
    (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;
    // Implementing the filter logic
    // Hint: Use the filter method to filter the courses array based on the provided criteria
    let filteredCourses = courses.filter(course => course.department === dept);

    if(minCredits && maxCredits && parseInt(minCredits) > parseInt(maxCredits)) {
        return res.status(400).json({
            error: "minCredits cannot be greater than maxCredits"
        });
    }

    if (level) {
        filteredCourses = filteredCourses.filter(course => course.level === level);
    }
    if (minCredits) {
        filteredCourses = filteredCourses.filter(course => course.credits >= parseInt(minCredits));
    }
    if (maxCredits) {
        filteredCourses = filteredCourses.filter(course => course.credits <= parseInt(maxCredits));
    }
    if (semester) {
        filteredCourses = filteredCourses.filter(course => course.semester === semester);
    }
    if (instructor) {
        filteredCourses = filteredCourses.filter(course => course.instructor === instructor);
    }
    

    // Check if any courses match the criteria
    if(filteredCourses.length === 0) {
        return res.status(404).json({
            error: "No courses found for the given criteria"
        });
    }

    // Return the filtered courses
    return res.json({
        results: filteredCourses,
        meta: {
            total: filteredCourses.length
        }
    });

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
