import axios from "axios";

export default {
    getItems() {
        return axios.get("http://api.myjson.com/bins/glr0u");
    }
}