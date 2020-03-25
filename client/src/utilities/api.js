import axios from "axios";

export default {
    getHikes: function(location, miles, difficulty) {
        return axios.get(`https://hiker-cb.herokuapp.com/api/hikes/${location}/${miles}/${difficulty}`);
    }
}