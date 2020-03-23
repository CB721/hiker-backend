import axios from "axios";

export default {
    getHikes: function(data) {
        return axios.get("/hikes/", data);
    }
}