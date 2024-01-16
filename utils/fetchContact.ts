import { Contact } from "@/typing";


export const fetchContact = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getContact`);

        const data = await res.json();
        const contact: Contact = data.contact;

        return contact;

    } catch (error) {
        console.error("Error fetching contact:", error);
    }
}


