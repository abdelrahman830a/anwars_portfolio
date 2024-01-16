import React, { useEffect } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { Contact } from "@/typing";
import { motion } from "framer-motion";
import { fetchContact } from "@/utils/fetchContact";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {
  contact: Contact;
};


function ContactMe({ contact }: Props) {
  
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:anwarmail@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (send from ${formData.email})`;
  };

  return (
    <div className=" h-screen relative flex-col md:flex-row text-center max-w-7xl mx-auto items-center justify-evenly p-8">
      <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl pb-3">
        Contact
      </h3>

      <div className="flex flex-col space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}>
          <h4 className="font-semibold text-center text-4xl text-gray-200">
            Everything you want?{" "}
            <span className="underline decoration-[#F7AB0A]/50 animate-pulse">
              I have it all!
            </span>
          </h4>
        </motion.div>

        <div className="space-y-4 ">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{contact?.phone}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] w-7 h-7 animate-pulse" />
            <p className="text-2xl">{contact?.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">{contact?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center flex-col space-y-2 max-w-2xl overflow-hidden mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
            <motion.input
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              {...register("name")}
              placeholder="name"
              className="contactInput"
              type="text"
            />
            <motion.input
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              {...register("email")}
              placeholder="email"
              className="contactInput"
              type="email"
            />
          </div>

          <motion.input
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <motion.textarea
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            {...register("message")}
            placeholder="message"
            className="contactInput"
          />

          <button className="bg-[#F7AB0A] max-w-2xl py-3 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
