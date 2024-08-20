import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { Url } from "url";

export type Tech = {
  icon: IconType;
  color: string;
};

export type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormError = {
    name?: string;
    email?: string;
    message?: string;
} 

export type ExperienceType = {
  readonly year: string;
  readonly role: string;
  readonly company: string;
  readonly description: string;
  readonly technologies: readonly string[];
};

export type ProjectType = {
  readonly title: string;
  readonly liveLink: Url;
  readonly githubLink: Url;
  readonly description: string;
  readonly image: StaticImageData;
  readonly technologies: readonly string[];
};