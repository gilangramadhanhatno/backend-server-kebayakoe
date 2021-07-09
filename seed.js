var seeder = require("mongoose-seed");
var mongoose = require("mongoose");

// Connect to MongoDB via Mongoose
seeder.connect(
  "mongodb+srv://gilangramadhanhatno:setiawanstore@cluster0.sjnip.mongodb.net/db_setiawan_store?retryWrites=true&w=majority",
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
        name: "Kebaya",
        itemId: [
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224") },
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225") },
        ],
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901112"),
        name: "Gamis",
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
      // White Pure
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
        title: "White Pure",
        price: 59,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb1") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },
      // Maxmara
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
        title: "Maxmara",
        price: 129,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Soraya Kebaya
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902224"),
        title: "Soraya Kebaya",
        price: 119,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Dhievine Batik
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902225"),
        title: "Dhievine Batik",
        price: 99,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4") },
        ],
        categoryId: "5e96cbe292b97300fc901111",
      },

      // Sabyan Gamis
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902226"),
        title: "Sabyan Gamis",
        price: 89,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Gamis Brokat
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902227"),
        title: "Gamis Brokat",
        price: 109,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Gamis Etnic
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902228"),
        title: "Gamis Etnic",
        price: 75,
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7") },
        ],
        categoryId: "5e96cbe292b97300fc901112",
      },

      // Shafiqa Longdress
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902229"),
        title: "Shafiqa Longdress",
        price: 79,
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
        bookingSelectDate: "07-14-2021",
        invoice: 1231231,
        itemId: {
          _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
          title: "White Pure",
          price: 89,
          buy: 2,
        },
        total: 178,
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
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903334"),
        firstName: "Sergio",
        lastName: "Ramos",
        email: "ramos@gmail.com",
        phoneNumber: "087887654321",
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
        imageUrl: "images/logo bca.png",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        nameBank: "BCA",
        nomorRekening: "878678",
        name: "setiawan",
        imageUrl: "images/logo mandiri.png",
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
