import "dotenv/config";
import mongoose from "mongoose";

import { User } from "./models/userModel.js";

const MONGO_DB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGO_DB_URI)
  .then(() => {
    console.log(`Connection with mongoDB: SUCCESS ✅`);

    // const users = [
    //   {
    //     username: "john_doe",
    //     password: "securePassword123",
    //     email: "john.doe@example.com",
    //     profile: {
    //       firstName: "John",
    //       lastName: "Doe",
    //       avatar: "https://example.com/avatar1.jpg",
    //       bio: "A passionate developer.",
    //       address: {
    //         street1: "123 Main St",
    //         street2: "Apt 4B",
    //         city: "New York",
    //         state: "NY",
    //         country: "USA",
    //         zip: "10001",
    //       },
    //     },
    //     deleted: false,
    //   },
    //   {
    //     username: "jane_smith",
    //     password: "passwordSecure987",
    //     email: "jane.smith@example.com",
    //     profile: {
    //       firstName: "Jane",
    //       lastName: "Smith",
    //       avatar: "https://example.com/avatar2.jpg",
    //       bio: "Lover of books and tech.",
    //       address: {
    //         street1: "456 Elm St",
    //         street2: "Suite 10",
    //         city: "Los Angeles",
    //         state: "CA",
    //         country: "USA",
    //         zip: "90001",
    //       },
    //     },
    //   },
    // ];
    const users = [
      {
        "username": "johnDoe",
        "password": "securePass123!",
        "email": "john.doe@example.com",
        "profile": {
          "firstName": "John",
          "lastName": "Doe",
          "avatar": "https://example.com/avatar/john_doe.png",
          "bio": "A software developer with a passion for open source.",
          "address": {
            "street1": "123 Elm Street",
            "street2": "Apt 4B",
            "city": "Springfield",
            "state": "IL",
            "country": "USA",
            "zip": "62704"
          }
        },
        "deleted": false
      },
      {
        "username": "janeSmith",
        "password": "anotherPass456!",
        "email": "jane.smith@example.com",
        "profile": {
          "firstName": "Jane",
          "lastName": "Smith",
          "avatar": "https://example.com/avatar/jane_smith.png",
          "bio": "Designer, traveler, and coffee enthusiast.",
          "address": {
            "street1": "456 Oak Avenue",
            "street2": "",
            "city": "Los Angeles",
            "state": "CA",
            "country": "USA",
            "zip": "90001"
          }
        },
        "deleted": false
      }
    ]
    

    User.insertMany(users)
      .then(() => {
        console.log("Testdaten erfolgreich hinzugefügt ✅");
        mongoose.disconnect();
      })
      .catch((error) => {
        console.error("Testdaten nicht erfolgreich hinzugefügt! ⛔");
        mongoose.disconnect();
        process.exit(1);
      });
  })
  .catch((error) => {
    console.error(`Connection with mongoDB: FAILED ⛔`, error);
    process.exit(1);
  });
