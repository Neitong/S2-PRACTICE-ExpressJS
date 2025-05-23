# S2-PRACTICE-ExpressJS

## Project Overview
This project demonstrates the implementation of a course management API using Express.js, showcasing various middleware functionalities and API endpoint implementations.

## Project Structure
```
StartCode/
├── Ex-1/
│   └── Answer_Question.txt    
├── EX-2/
│   ├── course.js             
│   ├── package.json          
│   └── server.js             
└── EX-3/
    ├── course.js
    ├── server.js             
    └── middleware/
        ├── authentication.js  
        ├── logger.js         
        └── validateQuery.js  
```

## Key Learnings

### 1. HTTP vs Express.js
- Express.js significantly simplifies route handling compared to native HTTP
- Built-in middleware support makes request processing more modular
- Better error handling and response management
- More intuitive API for handling HTTP methods

### 2. Middleware Implementation
Three key middleware components were implemented:
1. **Authentication** - Token-based verification
2. **Request Logging** - Timestamps and request details logging
3. **Query Validation** - Input validation for course filtering

### 3. API Features
- Course filtering by department
- Query parameters support for:
  - Academic level (graduate/undergraduate)
  - Credit range
  - Semester
  - Instructor

### 4. Error Handling
- Proper HTTP status codes (400, 401, 404)
- Descriptive error messages
- Input validation for credit ranges

## API Endpoints

### GET /departments/:dept/courses
Retrieves courses filtered by department and optional query parameters:
- `level`: Filter by academic level
- `minCredits`/`maxCredits`: Filter by credit range
- `semester`: Filter by semester
- `instructor`: Filter by instructor
- `token`: Required for authentication

## Running the Project
```bash
cd StartCode/EX-3
npm install
npm start
```

Server will run on http://localhost:3000