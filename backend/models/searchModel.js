import mongoose from 'mongoose';
const searchSchema = mongoose.Schema(
    {
        city: String,
        weatherData: Object,
        searchedAt: {
            type: Date,
            default: Date.now()
        }
    },
    {
        timestamps: true,
        collection: 'Search',
        versionKey: false
    }
);

const searchModel = mongoose.model('searchSchema', searchSchema);

export default searchModel;