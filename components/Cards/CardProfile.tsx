import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBriefcase,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import SeoHead from "../Head/SeoHead";

export type CardProfileProps = {
  friendCount: number;
  photoCount: number;
  commentCount: number;
  name: string;
  location: string;
  occupation: string;
  school: string;
  description: string;
};

export default function CardProfile(props: CardProfileProps) {
  return (
    <>
      <SeoHead title={`${props.name}, ${props.occupation}`} description={props.location} />
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
          <div className="relative">
            <img
              alt="..."
              src="/img/team-2-800x800.jpg"
              className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
            />
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
          <div className="py-6 px-3 mt-32 sm:mt-0">
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Connect
            </button>
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4 lg:order-1">
          <div className="flex justify-center py-4 lg:pt-4 pt-8">
            <div className="mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {props.friendCount}
              </span>
              <span className="text-sm text-blueGray-400">Friends</span>
            </div>
            <div className="mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {props.photoCount}
              </span>
              <span className="text-sm text-blueGray-400">Photos</span>
            </div>
            <div className="lg:mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                {props.commentCount}
              </span>
              <span className="text-sm text-blueGray-400">Comments</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
          {props.name}
        </h3>
        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="mr-2 text-lg text-blueGray-400"
          />{" "}
          {props.location}
        </div>
        <div className="mb-2 text-blueGray-600 mt-10">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="mr-2 text-lg text-blueGray-400"
          />{" "}
          {props.occupation}
        </div>
        <div className="mb-2 text-blueGray-600">
          <FontAwesomeIcon
            icon={faUniversity}
            className="mr-2 text-lg text-blueGray-400"
          />{" "}
          {props.school}
        </div>
      </div>
      <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
              {props.description}
            </p>
            <a
              href="#"
              className="font-normal text-sky-500"
              onClick={(e) => e.preventDefault()}
            >
              Show more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
