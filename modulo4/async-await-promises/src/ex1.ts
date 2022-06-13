import axios from "axios";
import { BASE_URL } from "./baseURL";

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${BASE_URL}/subscribers`);
    return response.data;
};