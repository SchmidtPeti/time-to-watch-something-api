const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema(
    {
        id: Number,
        title: String,
        sub_title: String,
        img_path: String,
        description: String,
        first_episode_url: String,
        active: Boolean
    },
    { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);