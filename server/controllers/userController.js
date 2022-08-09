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
  const { userName, password } = req.body;

  const isExist = await prisma.User.findUnique({
    where: { userName },
  });
  console.log("isexist", isExist);

  if (isExist) {
    res.status(400).json({ nameError: "already exist" });
  } else if (!isExist) {
    if (userName === "") {
      res.status(400).json({ error: "user name can not be left blank" });
    }
  } else if (userName !== "" && password !== "") {
    try {
      // hash password

      const salt = await bcrypt.genSalt(8);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await prisma.User.create({
        data: {
          userName,
          password: hashedPassword,
        },
        include: { books: true },
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
  }
};

// loginUser
// /login endpoint

exports.loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await prisma.User.findUnique({
      where: { userName },
    });
    console.log("loginden user", user);
    // const isPassword = bcrypt.compare(password, user.password);

    if (!user) {
      return res.status(400).json({ nameError: "no user name found" });
    } else {
      if (await bcrypt.compare(password, user.password)) {
        console.log("cntr user", user);
        console.log("pswrd", password);
        console.log("userpswrd", user.password);
        console.log("id", user.id);
        const token = generateToken(user.id);
        console.log("controller token", token);
        console.log("this", bcrypt.compare(password, user.password));
        return res
          .header({ Authorization: `Bearer ${token}` })
          .json({ userName: user.userName, token: token });
      } else {
        return res.status(400).json({ pswError: "password didnt match" });
      }
    }
  } catch (error) {
    console.log("login error:", error);
  }
};
