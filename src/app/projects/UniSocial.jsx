import communities_events_friends from '../../assets/UniHub/Communities_Events_Friends.PNG'
import communitiesEvents from '../../assets/UniHub/CommunityEvents.PNG'
import communitiesPage from '../../assets/UniHub/CommunityPage.PNG'
import homePost from '../../assets/UniHub/HomePost.PNG'
import loginPage from '../../assets/UniHub/LoginPage.PNG'
import registgerPage from '../../assets/UniHub/RegisterPage.PNG'
import uniHubHome from '../../assets/UniHub/UniHubHome.PNG'
import uniProfilePage from '../../assets/UniHub/UniProfilePage.PNG'
import uniUsersPosts from '../../assets/UniHub/UniUsersPosts.PNG'

export default function UniSocialWeb(){
    return(
        <div className="offcanvas offcanvas-end options-tabs" tabIndex="-1" id="University-Social-Media-Website">
                <div className="offcanvas-header gradient">
                    <h5>University Social Media Website</h5>
                    <button type="button" className="btn-close" data-bs-toggle="offcanvas"
                    data-bs-target="#Projects"
                    aria-controls="Projects" />
                </div>
                <div className="offcanvas-body">
                    <div className='programlangbox'>
                        <div className="btn link-btn">
                            <i className="fa-brands fa-python"></i> Python
                        </div>

                        <div className="btn link-btn">
                            <i className="fa-brands fa-python"></i> Django
                        </div>

                        <div className="btn link-btn">
                            <i className="fa-brands fa-html5"></i> HTML
                        </div>

                        <div className="btn link-btn">
                            <i className="fa-brands fa-css3-alt"></i> CSS
                        </div>

                        <div className="btn link-btn">
                            <i className="fa-brands fa-docker"></i> Docker
                        </div>

                        <div className="btn link-btn">
                            <i className="fa-brands fa-js"></i> JavaScript
                        </div>
                    </div>
                    UniHub was developed as part of my final-year group project at university, where our team was tasked with 
                    designing and developing a social media platform specifically for university students. The project achieved a 
                    90% final grade, making it one of the strongest projects I completed during my degree.
                    <br/>
                    <img src={uniHubHome} className='displayimg' />
                    <br/>
                    The aim of the project was to create a central platform where students could connect with each other, 
                    share content, discover university communities and participate in events. We designed the website around the idea 
                    of bringing many of the social aspects of university life into one platform.
                    <br/>
                    <img src={uniUsersPosts} className='displayimgsmall' /> 
                    <br/>

                    The website includes a range of features, including: <br/>

                    <ul>
                        <li>User accounts and authentication, allowing students to securely register and log in.</li>

                        <li>Customisable user profiles, where users can manage their personal information and view their activity.</li>

                        <li>Social posts, allowing users to create and share content with other students.</li>

                        <li>Comments and interactions, allowing users to engage with posts and start conversations.</li>

                        <li>University communities, giving students dedicated spaces based around shared interests, subjects and activities.</li>

                        <li>Events, allowing communities and users to create events that other students can discover and attend.</li>

                        <li>Community and user discovery, helping students find other people and groups with similar interests.</li>

                        <li>Personalised content, allowing users to view posts and activity from the wider university community.</li>
                    </ul>
                    <img src={homePost} className='displayimg' /> 

                    <img src={uniProfilePage} className='displayimg' /> 

                    The project was built using Python and Django for the backend, with HTML and CSS used to create the 
                    frontend interface. We also used Docker to provide a consistent development environment across the team.
                    <br/>
                    <img src={communities_events_friends} className='displayimgsmall' /> 
                    <br/>

                    The system was planned and developed collaboratively using the Scrum development framework. We divided the 
                    project into manageable tasks and development cycles, regularly reviewing our progress and adjusting our priorities as 
                    the project developed. Working in a team environment gave me experience with collaborative development, version control, 
                    task management and building software as part of a larger codebase.
                    <br/>
                    <img src={communitiesPage} className='displayimgsmall' />
                    <br/>

                    A significant part of the project involved taking the initial requirements and turning them into a functional web application. 
                    We planned the structure and functionality of the platform before progressively implementing and testing its different features.
                    <br/>
                    
                    <br/>

                    This project gave me valuable experience in developing a larger full-stack web application rather than 
                    smaller individual projects. It helped me develop my understanding of Django, database-driven applications, 
                    user authentication, web development and collaborative software development.
                    <br/>
                    <img src={communitiesEvents} className='displayimgsmall' /> 
                    <br/>

                    It also gave me experience working within an Agile development process and demonstrated how important planning, 
                    communication and dividing work effectively can be when developing software as a team.
                    <br/>
                    
                    <br/>

                    Achieving a 90% grade was particularly rewarding and demonstrated that the final application successfully 
                    met the project's requirements while providing a polished and functional user experience.

                    <img src={registgerPage} className='displayimgsmall' /> 
                    
                    <img src={loginPage} className='displayimgsmall' /> 

                    <div className="link-btn-wrapper">
                        <a
                        href="https://github.com/ANRogers/Uni-Hub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn link-btn"
                        >
                        <i className="bi bi-github"></i> View on GitHub
                        </a>
                    </div>
                    
                </div>
                </div>
    )
}