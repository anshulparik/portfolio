"use client";
import React, { ChangeEvent, useState } from "react";
import TextSlider from "@/components/animations/TextSlider";
import TextReveal from "@/components/animations/TextReveal";
import { RiRobot3Fill } from "react-icons/ri";
import Modal from "@/components/Modal";
import { MdErrorOutline } from "react-icons/md";
import { RiRobot2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="main"
      className="h-[calc(100vh_-_51.76px_-_1rem)] lg:h-[calc(100vh_-_51.76px_-_1.5rem)] 
      flex flex-col justify-center items-center relative"
    >
      <div>
        <h1 className="px-2 text-5xl md:text-6xl lg:text-9xl font-bold tracking-tight">
          <TextReveal text="Anshul" />{" "}
          <span className="text-purple-800">
            <TextReveal text="Parik" />
          </span>
        </h1>
        <TextSlider />
      </div>
      <div
        className="p-6 absolute shadow-inner rounded-full shadow-purple-800
        right-8 bottom-8 cursor-pointer"
      >
        <RiRobot3Fill onClick={handleOpenModal} className="text-5xl" />
      </div>
      <div className="">
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2 className="text-xl font-semibold mb-4">AI Chatbot</h2>
          <form
            // onSubmit={""}
            className="flex flex-col justify-center items-center"
          >
            <div
              className="mb-4 p-4 w-full md:w-[80%] 
               bg-purple-800 rounded flex"
            >
              <RiRobot2Fill className="text-xl w-1/6" />
              <p className="tracking-wide w-5/6 text-sm">
                <span className="font-semibold block mb-1">Hello there!</span>
                I'm <span className="font-semibold">Rex</span>, Anshul's
                personal AI. Feel free to ask me anything about their
                professional background.
              </p>
            </div>
            <div
              className="mb-4 p-4 w-full md:w-[80%] 
               bg-purple-800 rounded flex"
            >
              <FaUser className="text-xl w-1/6" />
              <input
                className="mb-2 border-0 border-b-2 bg-transparent outline-none
                tracking-wide w-5/6 text-sm"
              />
            </div>
          </form>
        </Modal>
      </div>
    </section>
  );
};

export default Main;
