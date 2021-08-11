var seeder = require("mongoose-seed");
var mongoose = require("mongoose");

// Connect to MongoDB via Mongoose
seeder.connect(
  "mongodb+srv://gilangramadhanhatno:kebayakoe@cluster0.sjnip.mongodb.net/db_kebayakoe?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  function () {
    // Load Mongoose models
    seeder.loadModels(["./models/Category", "./models/Bank", "./models/Item", "./models/Image", "./models/Member", "./models/Booking", "./models/Users"]);

    // Clear specified collections
    seeder.clearModels(["Category", "Bank", "Item", "Member", "Image", "Booking", "Users"], function () {
      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data, function () {
        seeder.disconnect();
      });
    });
  }
);

var data = [
  // start category
  {
    model: "Category",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901111"),
        name: "Category 1",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225") },
        ],
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901112"),
        name: "Category 2",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902227") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902228") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902229") },
        ],
      },
    ],
  },
  // end category
  // start item
  {
    model: "Item",
    documents: [
      // Gambar 1
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
        title: "Gambar 1",
        price: 159000,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb1") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },
      // Gambar 2
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
        title: "Gambar 2",
        price: 129000,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Gambar 3
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
        title: "Gambar 3",
        price: 119000,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Gambar 4
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
        title: "Gambar 4",
        price: 99000,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Gambar 5
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
        title: "Gambar 5",
        price: 89000,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Gambar 6
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
        title: "Gambar 6",
        price: 109000,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Gambar 7
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
        title: "Gambar 7",
        price: 75000,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Gambar 8
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
        title: "Gambar 8",
        price: 79000,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb8") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },
    ],
  },
  // end item
  // start image
  {
    model: "Image",
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb1"),
        imageUrl: "images/product-1.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2"),
        imageUrl: "images/product-2.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3"),
        imageUrl: "images/product-3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4"),
        imageUrl: "images/product-4.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5"),
        imageUrl: "images/product-4.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6"),
        imageUrl: "images/product-3.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7"),
        imageUrl: "images/product-2.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb8"),
        imageUrl: "images/product-1.jpg",
      },
    ],
  },
  // end image

  // start booking
  {
    model: "Booking",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cee1"),
        bookingSelectDate: "9-10-2021",
        invoice: 1231231,
        itemId: {
          _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
          title: "Gambar 1",
          price: 59000,
          buy: 2,
        },
        total: 178000,
        memberId: mongoose.Types.ObjectId("5e96cbe292b97300fc903333"),
        bankId: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        payments: {
          proofPayment: "images/buktibayar.jpeg",
          bankFrom: "BCA",
          status: "Proses",
          accountHolder: "ang",
        },
      },
    ],
  },
  // end booking

  // member
  {
    model: "Member",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903333"),
        firstName: "Cristiano",
        lastName: "Ronaldo",
        email: "ronaldo@gmail.com",
        phoneNumber: "087812345678",
      },
    ],
  },
  {
    model: "Bank",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903322"),
        nameBank: "Mandiri",
        nomorRekening: "089898",
        name: "setiawan",
        imageUrl: "images/logo-mandiri.png",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        nameBank: "BCA",
        nomorRekening: "878678",
        name: "setiawan",
        imageUrl: "images/logo-bca.png",
      },
    ],
  },
  {
    model: "Users",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903345"),
        username: "admin",
        password: "rahasia",
      },
    ],
  },
];
