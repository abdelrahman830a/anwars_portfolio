import { PageInfo, Social } from "@/typing";
import axios from "axios";


export const fetchSocials = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

        const data = await res.json();
        const socials: Social[] = data.socials;
        return socials;
    }
    catch (error) {
        console.error("Error fetching socials:", error);
    }

    return [{
        _createdAt: "",
        _id: "",
        _rev: '',
        _updatedAt: "",
        _type: 'social',
        title: "",
        url: "",
    }] as Social[];
}
