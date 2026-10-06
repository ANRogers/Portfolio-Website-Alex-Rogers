


export default function ContactMe(){
    return(
        <div
            className="offcanvas offcanvas-end options-tabs"
            tabIndex="-1"
            id="Contact"
            aria-labelledby="ContactLabel"
        >
            <div className="offcanvas-header">
                <h5
                    className="offcanvas-title gradient"
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
                        Have a project in mind, a question, or just want to say hi? <br />
                        Feel free to get in touch. Ill do my besyt to get back with you as soon as possible. 
                    </p>

                    <div className="contact-box">
                        <div className="contact-icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="contact-info">
                            <h1 className="contact-title">Email</h1>
                            <h1 className="contact-text">AlexNRogers2003@outlook.com</h1>
                        </div>
                    </div>

                    <div className="contact-box">
                        <div className="contact-icon">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="contact-info">
                            <h1 className="contact-title">Phone</h1>
                            <h1 className="contact-text">+44 7473 619 449</h1>
                        </div>
                    </div>

                    <div className="contact-box">
                        <div className="contact-icon">
                            <i className="fa-brands fa-github"></i>
                        </div>
                        <div className="contact-info">
                            <h1 className="contact-title">GitHub</h1>
                            <h1 className="contact-text"><a className="contact-link" target="_blank" href="https://github.com/ANRogers">github.com/ANRogers</a></h1>
                        </div>
                    </div>

                    <div className="contact-box">
                        <div className="contact-icon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="contact-info">
                            <h1 className="contact-title">Location</h1>
                            <h1 className="contact-text">Bristol, UK</h1>
                        </div>
                    </div>

                    <div className="link-btn-wrapper">
                        <a 
                        href="/AlexRogersCV.docx" 
                        download="Alex_Rogers_CV.docx"
                        className="btn link-btn">
                            <i className="fa-solid fa-file-lines"></i> Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}