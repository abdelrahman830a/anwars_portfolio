

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Contact } from "@/typing";

const query = groq`*[_type == 'contact'][0]`;

type Data = {
    contact: Contact;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const contact: Contact = await sanityClient.fetch(query);
    res.status(200).json({ contact })
  }
  