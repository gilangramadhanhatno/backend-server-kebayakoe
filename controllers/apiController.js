const Category = require("../models/Category");
const Item = require("../models/Item");
const Bank = require("../models/Bank");
const Member = require("../models/Member");
const Booking = require("../models/Booking");

module.exports = {
  landingPage: async (req, res) => {
    try {
      const category = await Category.find()
        .select("_id name")
        .limit(4)
        .populate({
          path: "itemId",
          select: "_id title price imageId",
          perDocumentLimit: 4,
          populate: {
            path: "imageId",
            select: "_id imageUrl",
            perDocumentLimit: 1,
          },
        });

      const brand = [
        {
          _id: 1,
          name: "Channel",
          imageUrl: "images/cc.png",
        },
        {
          _id: 2,
          name: "Nike",
          imageUrl: "images/nike.png",
        },
        {
          _id: 3,
          name: "Pull & Bear",
          imageUrl: "images/pnb.png",
        },
        {
          _id: 4,
          name: "Uniqlo",
          imageUrl: "images/uniqlo.png",
        },
      ];

      res.status(200).json({
        category,
        brand,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  detailPage: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id }).populate({ path: "imageId", select: "_id imageUrl" });

      const bank = await Bank.find();

      res.status(200).json({
        ...item._doc,
        bank,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },

  bookingPage: async (req, res) => {
    const { idItem, buy, bookingSelectDate, firstName, lastName, email, phoneNumber, accountHolder, bankFrom } = req.body;
    if (!req.file) {
      return res.status(404).json({ message: "Image not found" });
    }

    if (
      idItem === undefined ||
      buy === undefined ||
      // price === undefined ||
      bookingSelectDate === undefined ||
      firstName === undefined ||
      lastName === undefined ||
      email === undefined ||
      phoneNumber === undefined ||
      accountHolder === undefined ||
      bankFrom === undefined
    ) {
      res.status(404).json({ message: "Lengkapi semua field" });
    }

    const item = await Item.findOne({ _id: idItem });

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    await item.save();

    let total = item.price * buy;

    const invoice = Math.floor(1000000 + Math.random() * 9000000);

    const member = await Member.create({
      firstName,
      lastName,
      email,
      phoneNumber,
    });

    const newBooking = {
      invoice,
      bookingSelectDate,
      total,
      itemId: {
        _id: item.id,
        title: item.title,
        price: item.price,
        buy: buy,
      },

      memberId: member.id,
      payments: {
        proofPayment: `images/${req.file.filename}`,
        bankFrom: bankFrom,
        accountHolder: accountHolder,
      },
    };

    const booking = await Booking.create(newBooking);

    res.status(201).json({ message: "Success Booking", booking });
  },
};
