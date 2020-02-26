function restrictedView (req, res, next) {

    console.log("department is", req.decodedToken);

    // only allow users to view people in the same department
    if (!req.decodedToken || !req.decodedToken.department)
        { res.status(500).json({message: "Department unknown: as a precaution, no users are shown. "})}
    else if (req.decodedToken.department)
        {
            console.log("department is", req.decodedToken.department);

            next();
        }
}

module.exports = restrictedView;