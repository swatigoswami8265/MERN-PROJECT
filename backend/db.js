
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/mern-pizza';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("connected to mongo");

        const foodCollection = mongoose.connection.db.collection("Food_items");

        // Find food items and convert them to an array
        const foodItems = await foodCollection.find({}).toArray();

        const foodCategoryCollection = mongoose.connection.db.collection("food_category");

        // Find food categories and convert them to an array
        const foodCategories = await foodCategoryCollection.find({}).toArray();

        // Store the data globally
        global.Food_items = foodItems;
        global.foodCategory = foodCategories;

        console.log("Data loaded successfully");

    } catch (err) {
        console.log("---", err);
    }
};

mongoDB();

module.exports = mongoose;


