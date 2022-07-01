import { faAngular, faCss3, faJsSquare, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faBars, faClipboardList, faFingerprint, faLink, faMapMarked, faNewspaper, faPaintBrush, faTable, faTimes, faTools, faTv, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NotificationDropdown from "../Dropdowns/NotificationDropdown";
import UserDropdown from "../Dropdowns/UserDropdown";


export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState<string>("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#"
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              TS Notus NextJS
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      TS Notus NextJS
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <FontAwesomeIcon icon={faTv}
                      className={
                        "mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                     />{" "}
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/settings">
                  <a
                    href="#"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <FontAwesomeIcon icon={faTools}
                      className={
                        "mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/settings") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                     />{" "}
                    Settings
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/tables">
                  <a
                    href="#"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/tables") !== -1
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <FontAwesomeIcon icon={faTable}
                      className={
                        "mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/tables") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                     />{" "}
                    Tables
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/maps">
                  <a
                    href="#"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/maps") !== -1
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <FontAwesomeIcon icon={faMapMarked}
                      className={
                        "mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/maps") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                     />{" "}
                    Maps
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Auth Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/auth/login">
                  <a
                    href="#"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <FontAwesomeIcon icon={faFingerprint} className="text-blueGray-400 mr-2 text-sm" />{" "}
                    Login
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/auth/register">
                  <a
                    href="#"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <FontAwesomeIcon icon={faClipboardList} className="text-blueGray-300 mr-2 text-sm" />{" "}
                    Register
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              No Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/landing">
                  <a
                    href="#"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <FontAwesomeIcon icon={faNewspaper} className="text-blueGray-400 mr-2 text-sm" />{" "}
                    Landing Page
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/profile">
                  <a
                    href="#"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <FontAwesomeIcon icon={faUserCircle} className="text-blueGray-400 mr-2 text-sm" />{" "}
                    Profile Page
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Documentation
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/colors/notus"
                  target="_blank" rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <FontAwesomeIcon icon={faPaintBrush} className="mr-2 text-blueGray-300 text-base" />
                  Styles
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus"
                  target="_blank" rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <FontAwesomeIcon icon={faCss3} className="mr-2 text-blueGray-300 text-base" />
                  CSS Components
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
                  target="_blank" rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <FontAwesomeIcon icon={faAngular} className="mr-2 text-blueGray-300 text-base" />
                  Angular
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
                  target="_blank" rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <FontAwesomeIcon icon={faJsSquare} className="mr-2 text-blueGray-300 text-base" />
                  Javascript
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
                  target="_blank" rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <FontAwesomeIcon icon={faReact} className="mr-2 text-blueGray-300 text-base" />
                  NextJS
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
                  target="_blank" rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <FontAwesomeIcon icon={faReact} className="mr-2 text-blueGray-300 text-base" />
                  React
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
                  target="_blank" rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <FontAwesomeIcon icon={faLink} className="mr-2 text-blueGray-300 text-base" />
                  Svelte
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank" rel="noreferrer"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <FontAwesomeIcon icon={faVuejs} className="mr-2 text-blueGray-300 text-base" />
                  VueJS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
