import { useEffect, useState } from "react";

import DndScribeContent from './projects/DndScribe.jsx'
import ChatBotArt from './projects/ChatBotArt.jsx'
import UniSocialWeb from "./projects/UniSocial.jsx";
import CustomerRestOrder from "./projects/CustomerRestOrder.jsx";
import RestEPOS from "./projects/RestEPOS.jsx";

import AboutMe from "./AboutMe.jsx";
import ContactMe from "./ContactMe.jsx";
import Projects from "./Projects.jsx";




export default function Content({setShowDVD}) {
    return (
        <div>
            <div className="introduction">

                <div className="intro">
                    <p>HELLO, I'M</p>
                </div>

                <div className="name gradient">
                    <h1>ALEX ROGERS</h1>
                </div>

                <hr className="section-divider" />

                <div className="bio">
                    <p>
                        I'm a Computer Science graduate from the University of
                        the West of England, passionate about software
                        development, web development, and creating interesting
                        digital experiences.
                    </p>
                </div>

            </div>

            <button className="DVDButton"
             onClick={() => setShowDVD(prev => !prev)}>
            </button>

            <div className="options">

                {/* PROJECTS BUTTON */}
                <button
                    className="option"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#Projects"
                    aria-controls="Projects"
                >
                    <i className="fa-solid fa-folder"></i> Project's
                </button>


                {/* ABOUT ME BUTTON */}
                <button
                    className="option"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#AboutMe"
                    aria-controls="AboutMe"
                >
                    <i className="fa-solid fa-user"></i> About Me
                </button>


                {/* CONTACT BUTTON */}
                <button
                    className="option"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#Contact"
                    aria-controls="Contact"
                >
                    <i className="fa-solid fa-envelope"></i> Contact
                </button>



                {/* ================= PROJECTS OFFCANVAS ================= */}

                <Projects />

                {/* Individual Project Offcanvas */}

                {/* ========= Discord Voice transcription & Summary Bot ========= */}
                <DndScribeContent />

                {/* ========= Art Exhibition Chatbot Website ========= */}
                <ChatBotArt/>

                {/* ========= University Social Media Website ========= */}
                <UniSocialWeb/>

                {/* ========= Customer Restaurant Order Website ========= */}
                <CustomerRestOrder/>

                {/* ========= Restaurant EPOS System ========= */}
                <RestEPOS/>

                



                {/* ================= ABOUT ME OFFCANVAS ================= */}

                <AboutMe/>



                {/* ================= CONTACT OFFCANVAS ================= */}

                <ContactMe/>

            </div>
        </div>
    );
}