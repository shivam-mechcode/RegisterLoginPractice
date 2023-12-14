const { db } = require("../connect")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const users = require("../model/models");


exports.login = async (req, res) => {
    try {
        const loginUser = await users.findOne({ email: req.body.email })
        // console.log(loginUser)
        // console.log(loginUser.id)
        if (!loginUser) {
            return res.status(404).json({"message": "Use not found"})
        }
        else {
            bcrypt.compare(req.body.password, loginUser.password, (err, isMatch) => {
                if (err) {
                    return res.status(500).json({ "Error": err });
                }
                if (!isMatch) {
                    return res.status(400).json({ "message": "Wrong Password" });
                }
                const token = jwt.sign({ id: loginUser.id }, "secret-key", { expiresIn: '1d' })
                res.cookie("token", token, {
                    httpOnly: true,
                })
                return res.status(200).json({ "message": "Logged in", id: loginUser.id });
            })
        }
        
    } catch (error) {
        return res.status(400).json({"Error": error})
    }
    
    // db.query(sql,[req.body.email], (err, result) => {
    //     if (err) {
    //         return res.status(400).json({"Error": err})
    //     }
    //     if (!result.length) {
    //         return res.status(404).json({"message": "Use not found"})
    //     }

    //     bcrypt.compare(req.body.password, result[0].password, (err, isMatch) => {
    //         if (err) {
    //             return res.status(500).json({ "Error": err });
    //         }
    //         if (!isMatch) {
    //             return res.status(400).json({ "message": "Wrong Password" });
    //         }
    //         const token = jwt.sign({ id: result[0].id }, "secret-key", { expiresIn: '1d' })
    //         res.cookie("token", token, {
    //             httpOnly: true,
    //         })
    //         return res.status(200).json({ "message": "Logged in", id: result[0].id });
    //     })
    // })
}

// exports.login = (req, res) => {
//     const sql = "SELECT * FROM persons WHERE email=?"
//     db.query(sql,[req.body.email], (err, result) => {
//         if (err) {
//             return res.status(400).json({"Error": err})
//         }
//         if (!result.length) {
//             return res.status(404).json({"message": "Use not found"})
//         }

//         bcrypt.compare(req.body.password, result[0].password, (err, isMatch) => {
//             if (err) {
//                 return res.status(500).json({ "Error": err });
//             }
//             if (!isMatch) {
//                 return res.status(400).json({ "message": "Wrong Password" });
//             }
//             const token = jwt.sign({ id: result[0].id }, "secret-key", { expiresIn: '1d' })
//             res.cookie("token", token, {
//                 httpOnly: true,
//             })
//             return res.status(200).json({ "message": "Logged in", id: result[0].id });
//         })
//     })
