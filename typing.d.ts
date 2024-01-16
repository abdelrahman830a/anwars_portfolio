interface SanityBody {
    _createdAt: string,
    _id: string,
    _rev: string,
    _updatedAt: string,
}

interface Image {
    _type: 'image',
    asset: {
        _rev: string,
        _type: 'reference',
    }
}
export interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
    typewriter: string[];
}

export interface Technology extends SanityBody {
    _type: 'skill',
    image: Image,
    progress: number,
    title: string,
}

export interface Experience extends SanityBody {
    _type: 'experience',
    company: string,
    companyName: string,
    summary: string,
    companyImage: Image,
    dateStarted: string,
    dateEnded: string,
    isCurrentlyWorkingHere: boolean,
    jobTitle: string,
    points: Array<string>,
    technologies: Technology[],
}

export interface Skill extends SanityBody {
    _type: 'skill',
    image: Image,
    percentage: number,
    title: string,
}

export interface Project extends SanityBody {
    _type: 'project',
    title: string,
    image: Image,
    linkToProject: string,
    summary: string,
    technologies: Technology[],

}


export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}

export interface Contact extends SanityBody {
    _type: 'contact';
    phone: number;
    email: string;
    address: string;
}

export interface SanityProjectDetails {
    dataset: string;
    projectId: string;
    apiVersion: string;
    useCdn: boolean;
}