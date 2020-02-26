function restrictedView (req, res, next) {

    // only allow users to view people in the same department
    if (!req.decodedToken)
        { res.status(401).json({message: "Not authenticated, so no users are shown. "})}

    else if (!req.decodedToken.department)
        { res.status(403).json({message: "Department unknown: as a precaution, no users are shown. "})}

    else
        { next(); }
}

module.exports = restrictedView;