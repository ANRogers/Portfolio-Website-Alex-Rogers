import mousePadHome from '../../assets/MousePad/PadHomeScreen.PNG'
import mouseCreateTaskScreen from '../../assets/MousePad/PadCreateTaskScreen.PNG'
import mouseTasksScreen from '../../assets/MousePad/PadTasksScreen.PNG'
import mouseCalendarScreen from '../../assets/MousePad/PadCalScreen.PNG'
import mouseStatsScreen from '../../assets/MousePad/PadStatsScreen.PNG'

export default function MousePadContent() {
    return (
        <div className="offcanvas offcanvas-end options-tabs" tabIndex="-1" id="Mouse-Pad-Task-Orginiser">
            <div className="offcanvas-header gradient">
                <h5>Mouse Pad - Task Organiser</h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#Projects"
                    aria-controls="Projects"
                />
            </div>

            <div className="offcanvas-body">

                <div className='programlangbox'>
                    <div className="btn link-btn">
                        <i className="fa-brands fa-react"></i> React
                    </div>
                    <div className="btn link-btn">
                        <i className="fa-brands fa-js"></i> TypeScript
                    </div>
                    <div className="btn link-btn">
                        <i className="fa-brands fa-html5"></i> HTML
                    </div>
                    <div className="btn link-btn">
                        <i className="fa-brands fa-css3-alt"></i> CSS
                    </div>
                    <div className="btn link-btn">
                        <i className="fa-solid fa-database"></i> SQLite
                    </div>
                    <div className="btn link-btn">
                        <i className="fa-brands fa-rust"></i> Tauri / Rust
                    </div>
                </div>

                Mouse Pad is a desktop task management application built using React, TypeScript and Tauri.
                It provides a central place to organise tasks, manage projects and keep track of progress,
                with features including recurring tasks, a calendar and statistics.

                <img src={mousePadHome} className='displayimg' />

                I created Mouse Pad to provide a simple and organised way to manage my own tasks and projects.
                I wanted an application that would allow me to keep track of both one-off tasks and recurring
                responsibilities, while also providing an overview of what needed to be completed.

                <br />
                <br />

                The application uses collections to organise tasks into different
                projects or areas of responsibility. Each collection can have its own name and colour, making
                it easier to distinguish between different areas of work.

                Users can also create tasks with descriptions and different recurrence types, allowing them
                to organise everything from individual tasks to daily, weekly and monthly responsibilities.

                <img src={mouseCreateTaskScreen} className='displayimg' />

                When creating a task, users can provide a title, description and select which collection
                it belongs to. Tasks can also be configured as recurring, allowing Mouse Pad to automatically
                generate future occurrences rather than requiring users to recreate the same task manually.

                <br />
                <br />

                The tasks page provides a centralised view of all tasks created within Mouse Pad, rather
                than just displaying tasks that are currently due or scheduled. Similar to an alarm list,
                it allows users to browse and manage all their tasks in one place, with tasks organised
                by their recurrence type, such as daily, weekly, monthly and general tasks.

                Each task displays its stored information, allowing users to review and manage their tasks
                independently of individual scheduled occurrences. The page also includes an archived
                section, allowing users to keep tasks they no longer need active without permanently
                deleting them.

                <img src={mouseTasksScreen} className='displayimg' />

                Recurring tasks are managed through individual occurrences, allowing each instance to be
                completed separately while maintaining the history of previous occurrences. This means
                completing a daily or weekly task does not remove the original task or prevent future
                occurrences from being generated.

                <br />
                <br />

                Mouse Pad also includes a calendar page, providing a visual overview of scheduled tasks
                and their due dates. This makes it easier to see upcoming responsibilities and understand
                how tasks are distributed throughout the month.

                <img src={mouseCalendarScreen} className='displayimg' />

                <br />
                <br />

                To help track productivity, I also implemented a statistics page. This allows users to
                review their task completion history over a selected date range and filter the results
                by collection.

                The statistics are displayed using charts, providing a breakdown of completed tasks,
                late completions, outstanding tasks and overdue work. This gives users a better understanding
                of their progress and how consistently they are completing their tasks.

                <img src={mouseStatsScreen} className='displayimg' />

                <br />
                <br />

                Mouse Pad is built as a desktop application using Tauri, with React and TypeScript handling
                the user interface. SQLite is used to store tasks, collections and their associated occurrences
                locally, allowing the application to retain information between sessions.

                <div className="link-btn-wrapper">
                    <a
                        href="https://github.com/ANRogers/Task-Orginiser"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn link-btn"
                    >
                        <i className="bi bi-github"></i> View on GitHub
                    </a>

                    <a
                        href="/MousePad-Setup.exe"
                        download
                        className="btn link-btn"
                    >
                        <i className="bi bi-download"></i> Download Mouse Pad
                    </a>
                </div>

            </div>
        </div>
    )
}