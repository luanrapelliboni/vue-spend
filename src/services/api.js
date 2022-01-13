import axios from "axios";

export default {
    getItems() {
        return axios.get("http://myjson.dit.upm.es/api/bins/8g9n");
    }
}