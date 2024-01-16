import { Contact, Experience, Skill } from "@/typing";
import axios from "axios";


export const fetchExperiences = async () => {

    try {
        const res = await axios.get(`http://localhost:3000/api/getExperience`, {
            timeout: 7000,
        });

        const experiences: Experience[] = res.data.experiences;
        return experiences;
    } catch (error) {
        console.error("Error fetching experiences:", error);
    }

}
