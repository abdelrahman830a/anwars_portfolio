import { Skill } from "@/typing";
import axios from "axios";


export const fetchSkills = async () => {
    try {
        const res = await axios.get(`http://localhost:3000/api/getSkills`, {
            timeout: 7000,
        });
        const skills: Skill[] = res.data.skills;
        return skills;
    } catch (error) {
        console.error("Error fetching skills:", error);
    }
    return [{
        _createdAt: "",
        _id: "",
        _rev: "",
        _updatedAt: "",
        _type: 'skill',
        image: {
            _type: 'image',
            asset: {
                _rev: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
                _type: 'reference',
            }
        },
        percentage: 0,
        title: "",
    }] as Skill[];

}
