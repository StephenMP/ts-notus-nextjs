import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowAltCircleDown,
  faBars,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
// components
import PagesDropdown from "../Dropdowns/PagesDropdown";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#"
              >
                TS Notus NextJS
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-auth-navbar"
                >
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    className="lg:text-blueGray-200 text-blueGray-400 text-lg leading-lg mr-2"
                  />{" "}
                  Docs
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <PagesDropdown />
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="lg:text-blueGray-200 text-blueGray-400 text-lg leading-lg"
                  />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="lg:text-blueGray-200 text-blueGray-400 text-lg leading-lg"
                  />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/StephenMP/ts-notus-nextjs?ref=nnjs-auth-navbar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="lg:text-blueGray-200 text-blueGray-400 text-lg leading-lg"
                  />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  href="https://github.com/StephenMP/ts-notus-nextjs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faArrowAltCircleDown} /> Download
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
