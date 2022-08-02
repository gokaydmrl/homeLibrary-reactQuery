const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// creating token
// ikinci paraemtre secret onu env'e al
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 99999,
  });
};

// Register User
// creating user and saving in db
// /register endpoint

exports.registerUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    // hash password

    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.User.create({
      data: {
        userName,
        password: hashedPassword,
      },
    });

    const token = generateToken(user.id);

    // axios'a gidecek burdan gönderilen data (response.data)
    // passwoord göndermeye gerek yok sanırım
    await res
      .header({ Authorization: `Bearer ${token}` })
      .status(201)
      .json({
        userName: userName,
        token: token,
      });
    // console.log("req headers: ", req.headers);
    // console.log("req.user :", req.user);
  } catch (error) {
    console.log("error from regi", error);

    res.status(400).json(error);
  }
};

// loginUser
// /login endpoint
