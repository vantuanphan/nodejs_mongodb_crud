const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Male = new Schema(
    {
        image: { type: String, required: true  },
        name: { type: String, required: true  },
        description: { type: String, required: true  },
        color: { type: String, required: true  },
        size :{ type: String, required: true  },
        price : { type: Number, required: true  },
        // slug: { type: String, slug: 'name', unique: true },
    },
    // { timestamps: true },
);

module.exports = mongoose.model('Male', Male);
