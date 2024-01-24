const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const User = require("./models/user");
const Item = require("./models/item");
const Store = require("./models/store");
const Group = require("./models/group");

require("dotenv").config();

const url = process.env.DB_URL;
const dbName = "pitchin-db";

const stores = [
  {
    name: "Costco",
    location: "220 Smith St.",
  },
  {
    name: "Walmart",
    location: "190 King St.",
  },
  {
    name: "PetMart",
    location: "110 Queent St.",
  },
  { name: "Super Store", location: "90 Pawn St." },
];

const users = [
  {
    username: "John",
    image:
      "https://res.cloudinary.com/dmaijlcxd/image/upload/v1670714085/samples/ecommerce/car-interior-design.jpg",
  },
  {
    username: "Mary",
    image:
      "https://res.cloudinary.com/dmaijlcxd/image/upload/v1706135766/20231217_174310_opc71q.jpg",
  },
  {
    username: "Blue",
    image:
      "https://res.cloudinary.com/dmaijlcxd/image/upload/v1706135767/20231210_180756_dekn0x.jpg",
  },
  {
    username: "Luna",
    image:
      "https://res.cloudinary.com/dmaijlcxd/image/upload/v1706135769/20231210_182404_hauiiv.jpg",
  },
  {
    username: "Mela",
    image:
      "https://res.cloudinary.com/dmaijlcxd/image/upload/v1670714077/samples/people/kitchen-bar.jpg",
  },
];

async function clearDB() {
  await dropDatabase();
  try {
    const client = new MongoClient(url);
    await client.connect();
    console.log("Connected to MongoDb");
    const db = client.db(dbName);
    client.close();
    console.log("Created mydb Disconnected from MongoDb");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

async function dropDatabase() {
  try {
    const url = "mongodb://localhost:27017/";
    const client = new MongoClient(url);
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    await db.dropDatabase();
    console.log(`Dropped ${dbName}`);
    client.close();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error dropping the database", error);
  }
}
const insertSameplesData = async () => {
  try {
    mongoose.connect(url, {
      dbName: dbName,
    });

    const us = [];
    const ss = [];
    for (let user of users) {
      const u = await User.create(user);
      us.push(u);
    }
    for (let store of stores) {
      const s = await Store.create(store);
      ss.push(s);
    }

    const items = [
      {
        name: "Bread",
        description: "toast bread",
        price: 10.99,
        store: ss[0],
        approved_by: [us[4], us[0]],
      },
      {
        name: "Milk 10L 3%",
        description: "Large bottle of milk",
        price: 10.99,
        store: ss[1],
        approved_by: [us[0]],
      },
      {
        name: "Beef Rib 10kg",
        description: "Fine quality meat",
        price: 31.99,
        store: ss[1],
        approved_by: [us[4], us[0]],
      },
      {
        name: "Chewing Bones 10kg",
        description: "Fine quality bone",
        price: 12.99,
        store: ss[2],
        approved_by: [us[2]],
      },
      {
        name: "Dog Foods 40kg",
        description: "Fine quality dog foods",
        price: 48.99,
        store: ss[2],
        approved_by: [us[2]],
      },
      {
        name: "Toilet Paper 60 Rolls",
        description: "Fine Quality toilet paper",
        price: 22.99,
        store: ss[0],
        approved_by: [us[0]],
      },
    ];
    const is = [];
    for (let item of items) {
      const i = await Item.create(item);
      is.push(i);
    }

    const groups = [
      {
        name: "Meat Lovers",
        description:
          "We buy daily grocery items in a bulk especially for meat products.",
        owner: us[0],
        users: [us[0], us[4]],
        stores: [ss[0], ss[1], ss[3]],
        items: [is[0], is[1], is[2], is[5]],
        max_num: 4,
      },
      {
        name: "Dog Lovers",
        description: "We buy dog stuff in a bulk.",
        owner: us[1],
        users: [us[1], us[2], us[3]],
        stores: [ss[2], ss[3]],
        items: [is[3], is[4]],
        max_num: 4,
      },
    ];

    for (let group of groups) {
      await Group.create(group);
    }

    process.exit();
  } catch (e) {
    console.log(e);
    process.exit();
  }
};

// Create fresh mydb
clearDB();
insertSameplesData();
