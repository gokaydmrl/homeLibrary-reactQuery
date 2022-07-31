const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getBookHandler = async (req, res) => {
  const id = parseInt(req.params.id);
  const getBook = await prisma.Books.findUnique({
    where: {
      id,
    },
  });
  res.status(200).json(getBook);
};

////

exports.getBooksHandler = async (req, res) => {
  const getBooks = await prisma.Books.findMany();
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
