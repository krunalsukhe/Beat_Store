const mongoose = require("mongoose");

const beatSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: true,
          trim: true
        },
        description: {
          type: String,
          required: true,
          trim: true
        },
        // meta_data:{}
        file_path: {
          type: String,
          required: true
        },
        file_mimetype: {
          type: String,
          required: true
        }
      },
      {
        timestamps: true
      }
);

module.exports = mongoose.model("Notification", notificationSchema);