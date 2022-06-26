import axios from "axios";
import { BASE_URL } from "./baseURL";

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${BASE_URL}/subscribers`);
    return response.data;
};

const main = () => {
    try {
        getSubscribers()
            .then(console.log)
    } catch (error: any) {
        const response = error.response?.data || error.message
        console.log(response)
    }
}
main()
