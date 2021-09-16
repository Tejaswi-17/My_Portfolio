import React from "react";
import {SocialMediaIconsReact} from 'social-media-icons-react';

export default function About(){
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Tejaswi.
                <br className="hidden lg:inline-block" />
                Computer Science Undergrad
              </h1>
              <p className="mb-8 leading-relaxed">
                Currently, I'm in 3rd year of my graduation at Rajiv Gandhi University of Knowledge Technologies-Nuzvid
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Contact Me!
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work!
                </a>
              </div>
              <div className="flex justify-center mt-5 ml-5">
              <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="linkedin" roundness="50%" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(26,166,233,1)" url="https://www.linkedin.com/in/tejaswi-m-0a8750199/" size="28" />
              <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(182,104,228,1)" iconSize="5" roundness="46%" url="https://www.instagram.com/lavender_sou1/" size="60" />
              <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(8,8,8,1)" iconSize="5" roundness="46%" url="https://github.com/Tejaswi-17" size="41" />
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
        </section>
      );
}