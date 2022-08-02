const { PrismaClient } = require("@prisma/client");
const { use } = require("../router/userRouter");

const prisma = new PrismaClient();

exports.getManyBookHandler = async (req, res) => {
  const ownerID = parseInt(req.params.ownerID);

  try {
    const getBook = await prisma.Books.findMany({
      where: {
        ownerID,
      },
      include: {
        owner: true,
      },
    });
    res.status(200).json(getBook);
  } catch (error) {
    console.log("one book er", error);
  }
};

////

exports.getBooksHandler = async (req, res) => {
  const userID = req.userID;
  console.log("getBooktan userID", userID);

  const getBooks = await prisma.Books.findMany({
    where: {
      ownerID: userID,
    },
  });
  res.status(200).json(getBooks);
};

//

exports.createBookHandler = async (req, res) => {
  const { title, content, author, read, translator, publisher, dbColor } =
    req.body;
  const book = await prisma.Books.create({
    data: { title, content, author, read, translator, publisher, dbColor },
  });
  res.status(201).json(book);
};

///

exports.patchBookHandler = async (req, res) => {
  const { id } = req.params;
  const { content, dbColor, read } = req.body;

  const patchedBook = await prisma.Books.update({
    where: { id: Number(id) },
    data: { content, dbColor, read },
  });

  res.status(200).json(patchedBook);
};

///

exports.deleteBookHandler = async (req, res) => {
  const { id } = req.params;

  const deleteBook = await prisma.Books.delete({
    where: {
      id: Number(id),
    },
    rejectOnNotFound: false,
  });
  console.log("deleted book id", id);
  res.json(deleteBook);
};

exports.usars = async (req, res) => {
  const usars = await prisma.Books.findMany({
    where: { ownerID: 4 },
    include: { owner: true },
  });
  res.json(usars);
};
