import chatbotThumbnail from '../assets/Chatbot_Thumbnail.PNG';
import DndScribe from '../assets/DND_Scribe.PNG';
import UniHub from '../assets/UniHub.PNG'
import RestaurantThumbnail from '../assets/UWERestarunt.PNG'
import EPOSThumbnail from '../assets/ResturantEPOSThumbnail.PNG'



export default function Projects(){
    return (
    <div
        className="offcanvas offcanvas-end options-tabs"
        tabIndex="-1"
        id="Projects"
        aria-labelledby="ProjectsLabel"
    >
        <div className="offcanvas-header">
            <h5
                className="offcanvas-title gradient"
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
                    )
}