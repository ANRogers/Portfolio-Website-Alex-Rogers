
export default function AboutMe(){
    return(
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
                        interested in software development, webdevlopment, 
                        creating digital experiences and makeing useful things for me.

                        im always intresting in learning new things and exspanding my skills,
                         
                    </p>
                </div>
            </div>
        </div>
    )
}