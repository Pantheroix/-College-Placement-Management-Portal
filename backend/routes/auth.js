const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
// Define JWT_SECRET, either from environment variables or a hardcoded value
const JWT_SECRET = "your_jwt_secret_key";
//Create a User using Post"/api/auth/CreateUser".does not require auth
router.post(
  "/CreateUser",
  [
    body("Role", "Enter a valid Role").isLength({ min: 2 }),
    body("Email", "Enter a valid Email").isEmail(),
    body("Passwd").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // res.json([]);
    // console.log(req.body);
    // res.send(req.body);
    // const user = new User(req.body);
    // user.save();

    //if error return  Bad request
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //check wheteher usermail exits already
      let user = await User.findOne({
        Email: req.body.Email,
      });
      if (user) {
        success = false;

        return res.status(400).json({ error: "Email already registered" });
      }

      //getting salt
      const salt = await bcrypt.genSalt(10);
      //adding salt to the passwd
      let secPass = await bcrypt.hash(req.body.Passwd, salt);

      //create a new User
      user = await User.create({
        Role: req.body.Role,
        Email: req.body.Email,
        Passwd: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;

      // // .then((user) => res.json(user))
      // // .catch((err) => {
      // //   console.log(err);
      // //   res.json({
      // //     error: "Please enter a unique value for email",
      // //     message: err.message,
      // //   });
      // });
      res.json({ success, authToken });
    } catch (error) {
      res.status(500).send("Some error occures");
      res.send({ error });
    }
  }
);

router.post(
  "/LogUser",
  [
    body("Email", "Enter a valid Email").isEmail(),
    body("Passwd", "Enter a valid Passwd").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { Email, Passwd } = req.body;
    try {
      let user = await User.findOne({ Email });
      let Role = user.Role;
      if (!user) {
        success = false;
        return res
          .status(401)
          .json({ success, error: "incorrect credentials" });
      }
      const PasswdCompare = await bcrypt.compare(Passwd, user.Passwd);
      if (!PasswdCompare) {
        success = false;
        return res
          .status(401)
          .json({ success, error: "incorrect credentials" });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(payload, JWT_SECRET);
      success = true;
      res.send({ Role, success, authToken });
    } catch (error) {
      res.status(500).send({ error });
    }
  }
);

//get user detail login required

router.post("/getUser", fetchuser, async (req, res) => {
  try {
    const userid = req.user.id;
    let user = await User.findById(userid).select("-Passwd");

    res.send(user);

    // const PasswdCompare = await bcrypt.compare(Passwd, user.Passwd);
    // if (!PasswdCompare) {
    //   return res.status(400).json({ error: "incorrect credentials" });
    // }
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
