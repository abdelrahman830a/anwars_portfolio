import { Project } from "@/typing";
import axios from "axios";


export const fetchProjects = async () => {
    try {
        const res = await axios.get(`http://localhost:3000/api/getProjects`, {
            timeout: 7000,
        });
        const projects: Project[] = res.data.projects;
        return projects;
    }
    catch (error) {
        console.error("Error fetching projects:", error);
    }

    return [{
        _createdAt: "",
        _id: "",
        _rev: "",
        _updatedAt: "",
        _type: 'project',
        title: "",
        image: {
            _type: 'image',
            asset: {
                _rev: "image-d630d410cf2277696c6489eedb49b51bfd72c2fb-360x360-png",
                _type: 'reference',
            }
        },
        linkToProject: "",
        summary: "",
        technologies: [{
            _createdAt: "",
            _id: "",
            _rev: "",
            _updatedAt: "",
            _type: 'skill',
            image: {
                _type: 'image',
                asset: {
                    _rev: "image-d630d410cf2277696c6489eedb49b51bfd72c2fb-360x360-png",
                    _type: 'reference',
                }
            },
            progress: 0,
            title: "",
        }],
    }] as Project[]
}
