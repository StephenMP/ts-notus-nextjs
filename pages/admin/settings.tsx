import React from "react";

// components

import CardSettings from "../../components/Cards/CardSettings";
import CardProfile from "../../components/Cards/CardProfile";

// layout for page

import Admin from "../../layouts/Admin";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings 
            username="lucky.jenna"
            email="jenna@example.com"
            firstName="Jenna"
            lastName="Stones"
            address="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
            city="Los Angeles"
            country="United States"
            postalCode="12345"
            aboutMe="An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range."
          />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-12">
              <div className="px-6">
                <CardProfile
                  friendCount={22}
                  photoCount={10}
                  commentCount={89}
                  name="Jenna Stones"
                  location="Los Angeles, California"
                  occupation="Solution Manager - Creative Tim Officer"
                  school="University of Computer Science"
                  description="An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Settings.layout = Admin;
