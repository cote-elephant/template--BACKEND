/*
const usersNearby = await User.find({
    "profile.address.location": {
      $near: { // $near is used to find documents  that are geographically near a specificed point (=coordinates)
        $geometry: {
          type: "Point",
          coordinates: [-73.935242, 40.73061], //example coordinates [longitude, latitude]
        },
        $maxDistance: 5000, // Within 5km
      },
    },
  });
*/
//https://www.mongodb.com/docs/manual/reference/operator/query/near/
