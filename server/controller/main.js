
const users = require("../model/models");

exports.main = async (req, res) => {
    try {
        const value = req.params.id
    console.log(value)
    const loggedUser = await users.findById(value)
    if (!loggedUser) {
        return res.status(500).json({"Error": err})
    }
    return res.status(200).json(loggedUser)
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "Error": error });
    }
    

}

// const sql = "SELECT * from persons WHERE id=?"
//     db.query(sql, value, (err, result) => {
//         console.log(result)
//         if (err) {
//             return res.status(500).json({"Error": err})
//         }
//         return res.status(200).json(result[0])
//     })