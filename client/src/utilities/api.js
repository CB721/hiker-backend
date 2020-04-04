import axios from "axios";

export default {
    getHikes: function(location, miles, difficulty) {
        return axios.get(`/api/hikes/${location}/${miles}/${difficulty}`);
    }
}