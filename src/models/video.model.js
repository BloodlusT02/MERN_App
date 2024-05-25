const mongoose = require("mongoose");
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2");

const videoSchema = new mongoose.Schema({

    videoFile: {
        type: String, // cloudnary url
        require: true
    },
    thumbnail: {
        type: String, // cloudnary url
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    duration: {
        type: Number, // cloudnary url
        require: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true });

videoSchema.plugin(mongooseAggregatePaginate);

module.exports = mongoose.model("Video", videoSchema);