import axios from "axios";
import constants from "../utils/constants.js";
import helper from "../utils/helper.js";
import searchModel from "../models/searchModel.js";

const weatherController = async (req, res) => {
    const { city } = req.params;
    try {
        const apiKey = process.env.OPENWEATHER_API_KEY;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        const newSearch = new searchModel({
            city: city,
            weatherData: response.data
        });
        await newSearch.save();

        res.json(response.data);
    } catch (error) {
        return helper.returnFalseResponse(req, res, constants.CONST_RESP_CODE_INTERNAL_SERVER_ERROR, error.message)
    }
}

export default weatherController;