import { PageInfo } from "@/typing";
import axios from "axios";


export const fetchPageInfo = async () => {

    try {
        const res = await axios.get(`http://localhost:3000/api/getPageInfo`, {
            timeout: 7000,
        });

        const pageInfo: PageInfo = res.data.pageInfo;
        return pageInfo;
    } catch (error) {
        console.error("Error fetching pageInfo:", error);
    }
}
