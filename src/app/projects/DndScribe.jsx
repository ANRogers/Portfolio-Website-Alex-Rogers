import dndScribe from '../../assets/DND_Scribe.png'
import scribeStart from '../../assets/DNDscribe/StartScribe.png'
import scribeEnd from '../../assets/DNDscribe/ScribeEnd.png'
import scribeTranscript from '../../assets/DNDscribe/ScribeTranscript.png'
import summeriseText from '../../assets/DNDscribe/SummeriseText.png'

export default function DndScribeContent() {
    return(
    <div className="offcanvas offcanvas-end options-tabs" tabIndex="-1" id="Discord-Voice-Transcription">
        <div className="offcanvas-header">
            <h5>Discord Voice Transcription & Summary Bot</h5>
            <button type="button" className="btn-close" data-bs-toggle="offcanvas"
            data-bs-target="#Projects"
            aria-controls="Projects" />
        </div>
        <div className="offcanvas-body">
            <div className='programlangbox'>
                <div className="btn link-btn">
                    <i class="fa-brands fa-node"></i> Node.js
                </div>
                <div className="btn link-btn">
                    <i class="fa-brands fa-python"></i> Python
                </div>
            </div>
            A Discord bot built with Node.js and Python that transcribes each speaker's voice separately during D&D sessions, 
            labels dialogue by character name instead of Discord username, and uses local Whisper transcription plus 
            GPT-generated summaries to automatically build out an Obsidian campaign wiki — creating new character, location, and item notes as 
            they're mentioned for the first time.
            <img src={dndScribe} className='displayimg'/>
            This project was created to make it easier to take notes during the D&D sessions I run. 
            I wanted a simple way to automatically record and summarise what happened during each 
            session, so I created a bot that transcribes the session and generates a summary of the events.
            <br />
            <br />

            The bot then adds the summary to Obsidian, a note-taking application where notes can be linked together. I also added functionality to automatically create new notes for any characters, items, or locations mentioned during the session that do not already have existing notes. These notes are populated with relevant information gathered from the session, making it easier to keep the campaign's information organised and connected.

            <br />
            <br />

            To use the bot, users can start transcribing a conversation with the <b>/scribe-start</b> command. This command also allows users to provide a session number. If a session number is provided, the transcription file will be saved using that number. Otherwise, the bot automatically generates a filename based on the date and time.

            <img src={scribeStart} className='displayimg'/>

            Once transcription begins, the conversation is recorded and saved to a text file for the session. Users can also set their own name and associate it with their D&D character using the <b>/set-character</b> command. This allows the bot to identify who is speaking and keep the transcription organised.

            <br/>
            <br/>

            The transcription can also be viewed live through a website, allowing users to follow the conversation as it happens, making it easy to review conversations or catch up on anything that was missed during the session.

            <img src={scribeTranscript} className='displayimg'/>

            <br/>
            

            Once the session is finished, transcription can be stopped using the <b>/scribe-end</b> command. The bot then provides the filename of the completed transcription, making it easy to reference when generating the session summary.

            <img src={scribeEnd} className='displayimg'/>

            <br/>
            

            Once a transcription has been completed, it can be summarised using the <b>/summarise (session-file)</b> command, followed by the name of the session file. The bot generates a detailed summary of the session and saves it directly into Obsidian.

            During this process, the bot also checks for any new characters, items, or locations mentioned in the session that do not already have notes. When new entries are found, the bot automatically creates notes for them using information gathered from the transcription. This keeps the campaign's documentation up to date while reducing the amount of manual note-taking required.

            <img src={summeriseText} className='displayimg'/>

            <div className="link-btn-wrapper">
            <a
            href="https://github.com/ANRogers/DndScribe"
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