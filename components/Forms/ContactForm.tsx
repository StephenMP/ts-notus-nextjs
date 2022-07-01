import {
  faEnvelope,
  faIdBadge,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export type ContactFormProps = {
  title: string;
  subTitle: string;
};

const defaultForm: ContactForm = {
  fullName: "",
  fullNameCount: 0,
  email: "",
  emailCount: 0,
  phone: "",
  phoneCount: 0,
  message: "",
  messageCount: 0,
  error: "",
  toast: "",
};

type ContactFormInput = "fullName" | "email" | "phone" | "message";

type ContactForm = {
  fullName: string;
  fullNameCount: number;
  email: string;
  emailCount: number;
  phone: string;
  phoneCount: number;
  message: string;
  messageCount: number;
  error: string;
  toast: string;
};

function formatPhoneNumber(value: string) {
  if (!value) {
    return value;
  }

  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) {
    return `(${phoneNumber}`;
  }

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}

export default function ContactForm(props: ContactFormProps) {
  const maxNameLength = 100;
  const maxEmailLength = 320;
  const maxPhoneLength = 14;
  const maxMessageLength = 500;
  const [form, setForm] = useState<ContactForm>(defaultForm);

  function inputChange(value: string, input: ContactFormInput) {
    let newForm = { ...form };

    if (input === "phone") {
      newForm[input] = formatPhoneNumber(value);
    } else {
      newForm[input] = value;
    }

    newForm[`${input}Count`] = value.length;
    setForm(newForm);
  }

  async function send() {
    if (!form.fullName || !form.email || !form.phone || !form.message) {
      setForm({
        ...form,
        toast: "",
        error: "All fields are required. Please enter any missing information.",
      });
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      setForm({
        ...form,
        toast: "",
        error: "Please enter a valid email address.",
      });
    } else {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setForm({
          ...defaultForm,
          toast: "Message sent!",
        });
      } else {
        setForm({
          ...form,
          toast: "",
          error:
            "Something went wrong!",
        });
      }
    }
  }

  return (
    <div className="relative text-left flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
      <div className="flex-auto p-5 lg:p-10">
        <h4 className="text-2xl font-semibold">{props.title}</h4>
        <p className="leading-relaxed mt-1 mb-4 text-blueGray-700">
          {props.subTitle}
        </p>
        <div className="relative w-full mb-3 mt-8">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="full-name"
          >
            <FontAwesomeIcon icon={faIdBadge} /> Full Name
          </label>
          <input
            id="full-name"
            type="text"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="First and Last Name"
            maxLength={maxNameLength}
            value={form.fullName}
            onChange={(e) => inputChange(e.target.value, "fullName")}
          />
          <span className="text-blueGray-600 text-sm float-right">
            {form.fullNameCount} / {maxNameLength}
          </span>
        </div>

        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="email"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </label>
          <input
            id="email"
            type="email"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="you@youremail.com"
            maxLength={maxEmailLength}
            value={form.email}
            onChange={(e) => inputChange(e.target.value, "email")}
          />
          <span className="text-blueGray-600 text-sm float-right">
            {form.emailCount} / {maxEmailLength}
          </span>
        </div>

        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="phone"
          >
            <FontAwesomeIcon icon={faPhone} /> Phone
          </label>
          <input
            id="phone"
            type="tel"
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="(208)123-4567"
            maxLength={maxPhoneLength}
            value={form.phone}
            onChange={(e) => inputChange(e.target.value, "phone")}
          />
          <span className="text-blueGray-600 text-sm float-right">
            {form.phoneCount} / {maxPhoneLength}
          </span>
        </div>

        <div className="relative w-full mb-3">
          <label
            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
            htmlFor="message"
          >
            <FontAwesomeIcon icon={faMessage} /> Message
          </label>
          <textarea
            id="message"
            rows={4}
            cols={80}
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
            placeholder="Type a message..."
            maxLength={maxMessageLength}
            value={form.message}
            onChange={(e) => inputChange(e.target.value, "message")}
          />
          <span className="text-blueGray-600 text-sm float-right">
            {form.messageCount} / {maxMessageLength}
          </span>
        </div>
        <div className="text-center mt-6">
          <button
            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={send}
          >
            Send Message
          </button>
        </div>
        <div className="text-center mt-6 text-sm">
          <span className="text-red-600">{form.error}</span>
          <span className="text-blueGray-600">{form.toast}</span>
        </div>
      </div>
    </div>
  );
}
