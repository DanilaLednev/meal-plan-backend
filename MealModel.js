const mongoose = require("mongoose");


const mealSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    }
});


module.exports = mongoose.model("Meal", mealSchema);

//? Первый аргумент - уникальное имя создаваемой для модели коллекции(Mongoose создаст коллекцию для модели SomeModel), второй аргумент - схема, которая используется для создания модели.