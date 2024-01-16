import React from "react";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import WorkExperience from "@/components/WorkExperience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import engineer from "@/public/assets/images";

import {
  Contact,
  Experience,
  PageInfo,
  Project,
  Skill,
  Social,
} from "@/typing";
import { fetchContact } from "@/utils/fetchContact";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import axios from "axios";
import { urlFor } from "@/sanity";
import pageInfo from "@/sanity/schemas/pageInfo";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  contact: Contact;
};


// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo = await fetchPageInfo();
//   const experiences = await fetchExperiences();
//   const skills = await fetchSkills();
//   const projects = await fetchProjects();
//   const socials = await fetchSocials();
//   const contact = await fetchContact();

//   return {
//     props: {
//       pageInfo,
//       experiences,
//       skills,
//       projects,
//       socials,
//       contact,
//     },
//     revalidate: 20,
//   };
// };

export default function Home({
  pageInfo,
  socials,
  skills,
  experiences,
  projects,
  contact,
}: Props) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageInfo = await fetchPageInfo();
        const experiences = await fetchExperiences();
        const skills = await fetchSkills();
        const projects = await fetchProjects();
        const socials = await fetchSocials();
        const contact = await fetchContact();
  
        // Now you can use pageInfo, experiences, skills, projects, socials, and contact directly
        return {
          props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
            contact,
          },
        };    } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  const pageInfoWithHeroImage = pageInfo as PageInfo;

  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white z-0 overflow-y-scroll overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin snap-y snap-mandatory">
      <Header socials={socials} />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe contact={contact} />
      </section>

      <Link href="#hero">
        <footer className="sticky top:0 md:bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-end p-5">
            {/* <img
              className=" h-10 w-10 object-cover rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={urlFor(pageInfoWithHeroImage?.heroImage).url()}
              alt="avatar"
            /> */}
          </div>
        </footer>
      </Link>
    </div>
  );
}
