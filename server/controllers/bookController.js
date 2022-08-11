const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

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
  const ownerID = req.userID;

  const book = await prisma.Books.create({
    data: {
      title,
      content,
      author,
      read,
      translator,
      publisher,
      dbColor,
      ownerID,
    },
    include: {
      owner: true,
    },
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
  console.log(patchedBook);
};

///

exports.deleteBookHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteBook = await prisma.Books.delete({
      where: {
        id: Number(id),
      },
      rejectOnNotFound: false,
    });
    console.log("deleted book id", id);
    res.json(deleteBook);
  } catch (error) {
    console.log("delete error", error);
  }
};

