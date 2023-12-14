const bcrypt = require("bcrypt");
const users = require("../model/models");

exports.register = async(req, res) => {
    try {
        // Check if a user with the provided email already exists
        const existingUser = await users.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(402).json("This user already exists");
        }

        // Hash the password and create a new user
        bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
            if (err) {
                console.log("Error hashing the password:", err);
                return res.status(500).json("Error hashing the password");
            }

            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                number: req.body.number
            };

            await users.create(newUser); 
            return res.status(200).json("User registered successfully");
        });

    } catch (error) {
        console.log("Database error:", error);
        return res.status(500).json("Error registering user");
    }
//   const existingUser = users.findOne({ email: req.body.email });
//   if (existingUser) {
//     return res.status(402).json("This user already exists");
//   } else {
//     bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
//       if (err) {
//         console.log("Error hashing the password:", err);
//         return res.status(500).json("Error hashing the password");
//       } else {
//         const newUser = {
//           name: req.body.name,
//           email: req.body.email,
//           password: hashedPassword,
//           number: req.body.number,
//         };

//         users.create(newUser);
//         return res.status(200).json("Data inserted");
//       }
//     });
//   }

  // Check if the user already exists
};
