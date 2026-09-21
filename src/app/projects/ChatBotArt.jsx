import conversationChat from '../../assets/ChatBot/ConversationChat.png';
import EverAfterHome from '../../assets/ChatBot/EverafterHome.png';
import Angryface from '../../assets/ChatBot/Angryface.png';
import Happyface from '../../assets/ChatBot/Happyface.png';
import Sadface from '../../assets/ChatBot/Sadface.png';
import MobileChatPage from '../../assets/ChatBot/MobileChatPage.png';
import UweArtTalk from '../../assets/ChatBot/UweArtTalk.jpg';


export default function ChatBotArt(){
    return(
        <div className="offcanvas offcanvas-end options-tabs" tabIndex="-1" id="Art-Exhibition-Chatbot-Website">
        <div className="offcanvas-header">
            <h5>Art Exhibition Chatbot Website</h5>
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
                    <i className="fa-brands fa-js"></i> JavaScript
                </div>
                <div className="btn link-btn">
                    <i className="fa-brands fa-react"></i> React
                </div>
                <div className="btn link-btn">
                    <i className="fa-brands fa-html5"></i> HTML
                </div>
                <div className="btn link-btn">
                    <i className="fa-brands fa-css3-alt"></i> CSS
                </div>
                <div className="btn link-btn">
                    <i className="fa-solid fa-database"></i> SQL
                </div>
            </div>
            A self-developed AI chatbot website built using Python, JavaScript, React, and Django. 
            The project explores how AI can be used to create a digital recreation of a person using 
            their existing digital messages and conversations. The chatbot was trained on a large 
            collection of personal messages to reproduce the conversational style, personality, and 
            mannerisms of my collaborator.

            <img src={conversationChat} className='displayimg'/>
            <img src={MobileChatPage} className='displayimgsmall'/>

            <br />
            <br />
            I developed the full web application, including the React frontend, Django REST API, chatbot 
            system, data processing and training pipeline, and supporting website functionality. 
            The project involved processing and filtering a large dataset of personal conversations 
            before using the resulting data to train the chatbot, allowing it to generate responses 
            based on the communication style found within the original messages.
            
            <img src={EverAfterHome} className='displayimg'/>

            <br />
            <br />
            The project was developed as a collaborative art installation at UWE Bristol, exploring 
            the relationship between AI, digital identity, memory, and grief. The website was designed 
            with an intentionally corporate and transactional aesthetic to reinforce these themes and 
            question the way digital services could approach something as personal as grief.
            
            <img src={Angryface} className='displayimgsmall'/>
            <img src={Happyface} className='displayimgsmall'/>
            <img src={Sadface} className='displayimgsmall'/>
            <br />
            <br />
            The finished project was exhibited at multiple art installations, including Spike Island, 
            and both myself and my collaborator gave talks about the project, discussing its technical 
            development, artistic aims, and the wider ideas surrounding AI and digital identity.

            <img src={UweArtTalk} className='displayimgsmall'/>


            <div className="link-btn-wrapper">
            <a
            href="https://www.everafterai.art"
            target="_blank"
            rel="noopener noreferrer"
            className="btn link-btn"
            >
            <i className="fa-solid fa-globe"></i> Visit Website
            </a>
            <a
            href="https://www.youtube.com/watch?v=CKU7wvw6F-4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn link-btn"
            >
            <i className="fa-brands fa-youtube"></i> Watch Demo Video
            </a>
            </div>

        </div>
        </div> 
    )
}