export const authenticateToken = (req, res, next) => {
    const token = req.query.token;
    
    if (!token) {
        return res.status(401).json({ 
            error: "Authentication token is required" 
        });
    }
    
    if (token !== "xyz123") {
        return res.status(401).json({ 
            error: "Invalid authentication token" 
        });
    }
    
    next();
};