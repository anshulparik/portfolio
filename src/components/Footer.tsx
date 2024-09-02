"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FOOTER } from "@/utils/constants";
import { FaLinkedin } from "react-icons/fa";
import { Url } from "next/dist/shared/lib/router/router";

const Footer = () => {
  return (
    <footer
      className="bg-purple-800 rounded-tl-[80px] pt-12 pb-6 md:py-12
      px-8 ml-12 w-[calc(100%_-_48px)]"
    >
      <div className="md:flex md:items-center md:justify-between mb-6 md:mb-12">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="mb-6 md:mb-0"
        >
          <p className="text-2xl md:text-3xl mb-2 font-semibold">
            {FOOTER?.text1}
          </p>
          <p className="text-sm md:text-base font-semibold">{FOOTER?.text2}</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="flex text-2xl md:text-3xl"
        >
          <Link
            href={process?.env?.NEXT_PUBLIC_LINKEDIN_URL as Url}
            target="_blank"
          >
            <FaLinkedin className="mr-3 cursor-pointer hover:text-black" />
          </Link>
          <Link
            href={process?.env?.NEXT_PUBLIC_GITHUB_URL as Url}
            target="_blank"
          >
            <FaGithub className="cursor-pointer hover:text-black" />
          </Link>
        </motion.div>
      </div>
      <div className="font-bold md:text-xl w-full text-center border-t-2 border-white">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          className="mt-6 md:mt-12"
        >
          Copyright © 2024 by
          <Image
            src="/images/anshul25.png"
            alt="Anshul Parik"
            width={100}
            height={80}
            className="inline-block"
          />
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
