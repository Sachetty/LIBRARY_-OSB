import Axios from "axios";

const Api = Axios.create({
    baseURL: ' https://hn.algolia.com/api/v1/search?query='
});

export default Api;