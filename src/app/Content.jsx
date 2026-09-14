import { useEffect, useState } from "react";

import DndScribeContent from './projects/DndScribe.jsx'
import ChatBotArt from './projects/ChatBotArt.jsx'
import UniSocialWeb from "./projects/UniSocial.jsx";
import CustomerRestOrder from "./projects/CustomerRestOrder.jsx";
import RestEPOS from "./projects/RestEPOS.jsx";

import chatbotThumbnail from '../assets/Chatbot_Thumbnail.PNG';
import DndScribe from '../assets/DND_Scribe.PNG';
import UniHub from '../assets/UniHub.png'
import RestaurantThumbnail from '../assets/UWERestarunt.png'
import EPOSThumbnail from '../assets/ResturantEPOSThumbnail.png'




export default function Content() {
    return (
        <div>
            <div className="introduction">

                <div className="intro">
                    <p>HELLO, I'M</p>
                </div>

                <div className="name">
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


            <div className="options">

                {/* PROJECTS BUTTON */}
                <button
                    className="option"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#Projects"
                    aria-controls="Projects"
                >
                    Project's
                </button>


                {/* ABOUT ME BUTTON */}
                <button
                    className="option"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#AboutMe"
                    aria-controls="AboutMe"
                >
                    About Me
                </button>


                {/* CONTACT BUTTON */}
                <button
                    className="option"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#Contact"
                    aria-controls="Contact"
                >
                    Contact
                </button>



                {/* ================= PROJECTS OFFCANVAS ================= */}

                <div
                    className="offcanvas offcanvas-end options-tabs"
                    tabIndex="-1"
                    id="Projects"
                    aria-labelledby="ProjectsLabel"
                >
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title"
                            id="ProjectsLabel"
                        >
                            Projects
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body">
                        <div>

                            {/* ========= Discord Voice transcription & Summary Bot ========= */}

                            <button className="project-popout-button" data-bs-toggle="offcanvas" data-bs-target="#Discord-Voice-Transcription">
                            <div className="card mb-3" style={{ maxWidth: "540px" }} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={DndScribe} className="img-fluid rounded-start" alt="chatbotThumbnail" />
                                </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Discord Voice Transcription & Summary Bot</h5>
                                        <p className="card-text">A Discord bot that transcribes and labels speakers, 
                                            then summarises conversations using local speech-to-text and ChatGPT.</p>
                                        
                                    </div>
                                    </div>
                            </div>
                            </div>
                            </button>
                            
                            {/* ========= Chat Bot Art Installation ========= */}

                            <button className="project-popout-button" data-bs-toggle="offcanvas" data-bs-target="#Art-Exhibition-Chatbot-Website">
                            <div className="card mb-3" style={{ maxWidth: "540px" }} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={chatbotThumbnail} className="img-fluid rounded-start" alt="chatbotThumbnail" />
                                </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Art Exhibition Chatbot Website</h5>
                                        <p className="card-text">A custom-built and trained chatbot developed for several art 
                                            installations and showcased at events including Spike Island.</p>
                                        
                                    </div>
                                    </div>
                            </div>
                            </div>
                            </button>


                            {/* ========= University Social Media Website ========= */}
                            <button className="project-popout-button" data-bs-toggle="offcanvas" data-bs-target="#University-Social-Media-Website">
                            <div className="card mb-3" style={{ maxWidth: "540px" }} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={UniHub} className="img-fluid rounded-start" alt="chatbotThumbnail" />
                                </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">University Social Media Website</h5>
                                        <p className="card-text">A university social platform for makeing posts, adding friends, photos and joining communities for clubs and events.</p>
                                        
                                    </div>
                                    </div>
                            </div>
                            </div>
                            </button>


                            {/* ========= Customer Restaurant Order Website ========= */}
                            <button className="project-popout-button" data-bs-toggle="offcanvas" data-bs-target="#Customer-Restaurant-Order-Website">
                            <div className="card mb-3" style={{ maxWidth: "540px" }} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={RestaurantThumbnail} className="img-fluid rounded-start" alt="chatbotThumbnail" />
                                </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Customer Restaurant Order Website</h5>
                                        <p className="card-text"> A restaurant ordering website for browsing menus, placing orders, 
                                            tracking progress, and making reservations.</p>
                                        
                                    </div>
                                    </div>
                            </div>
                            </div>
                            </button>



                            {/* ========= Restaurant EPOS System ========= */}
                            <button className="project-popout-button" data-bs-toggle="offcanvas" data-bs-target="#Restaurant-EPOS-System">
                            <div className="card mb-3" style={{ maxWidth: "540px" }} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={EPOSThumbnail} className="img-fluid rounded-start" alt="chatbotThumbnail" />
                                </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Restaurant EPOS System</h5>
                                        <p className="card-text">A restaurant EPOS system for managing orders, menus, reservations, and business analytics.</p>
                                        
                                    </div>
                                    </div>
                            </div>
                            </div>
                            </button>


                            

                            

                            

                            

                        </div>
                    </div>
                </div>

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

                <div
                    className="offcanvas offcanvas-end options-tabs"
                    tabIndex="-1"
                    id="AboutMe"
                    aria-labelledby="AboutMeLabel"
                >
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title"
                            id="AboutMeLabel"
                        >
                            About Me
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body">
                        <div>
                            <p>
                                I'm Alex, a Computer Science graduate
                                interested in software development and
                                creating digital experiences.
                            </p>
                        </div>
                    </div>
                </div>



                {/* ================= CONTACT OFFCANVAS ================= */}

                <div
                    className="offcanvas offcanvas-end options-tabs"
                    tabIndex="-1"
                    id="Contact"
                    aria-labelledby="ContactLabel"
                >
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title"
                            id="ContactLabel"
                        >
                            Contact
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body">
                        <div>
                            <p>
                                You can contact me using the details below.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}