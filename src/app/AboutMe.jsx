
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
                    className="offcanvas-title gradient"
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
                    <p> I'm Alex, a Computer Science graduate with a strong interest in software development, 
                        web development, and creating digital experiences. I enjoy building things from the ground 
                        up and finding practical ways to turn ideas into working projects. Whether I'm developing 
                        a website, experimenting with a new programming language, or creating a tool to solve a 
                        problem I've encountered, I enjoy the process of taking an idea and turning it into something 
                        I can actually use. </p>

                    <p> I'm always looking for opportunities to learn and expand my skills. One of the things I enjoy 
                        most about programming is that there is always something new to discover, whether that is a new 
                        language, framework, technique, or approach to solving a problem. I enjoy challenging myself with 
                        projects that require me to learn something unfamiliar, as I find that some of the most rewarding 
                        experiences come from figuring out how something works rather than simply knowing the answer from 
                        the beginning. </p>

                    <p> A lot of my projects come from my own interests and hobbies. I particularly enjoy creating software 
                        that has a practical purpose or connects different interests together. This has led me to work on a 
                        variety of projects, from websites and applications to more experimental projects involving 
                        artificial intelligence and digital experiences. I enjoy being able to combine different areas 
                        of knowledge and see how they can be used together to create something more interesting. </p>

                    <p> My interests also extend beyond programming. I enjoy 3D printing, which I use to create props, figures, 
                        and practical parts inspired by games and other things I enjoy. I like the freedom that 3D printing 
                        provides, allowing me to take an idea and turn it into something physical. It has also taught me a 
                        lot about patience, problem-solving, and adapting when something does not work as expected. </p>

                    <p> I also enjoy working on vehicles, particularly cars and motorcycles. I find the mechanical and 
                        engineering side of them fascinating, especially understanding how all of the different components 
                        work together. Being able to diagnose a problem, understand why something has gone wrong, and then 
                        repair or improve it is an incredibly satisfying process. In many ways, I approach mechanical 
                        problems in the same way I approach programming problems: understand how the system works, 
                        identify the problem, experiment with possible solutions, and keep learning until I find an 
                        answer. </p>

                    <p> Another major part of my life is tabletop roleplaying games, particularly Dungeons & Dragons. 
                        I enjoy creating worlds, characters, stories, and experiences for my friends, and 
                        I have spent years developing and running my own campaigns. This has become another way for 
                        me to combine my interests, as I often use programming, problem-solving, writing, and even 
                        3D printing to enhance the games I create. </p>

                    <p> Ultimately, most of my interests come from the same desire: to learn, create, and improve. 
                        I take a lot of pride in seeing something I have worked on develop from an idea into something 
                        functional and meaningful. I enjoy the feeling of overcoming a difficult problem and knowing that 
                        I built the solution myself. </p>

                    <p> I try to approach learning with the mindset that, given enough time, practice, and determination, 
                        I can learn how to do almost anything. I may not always know the answer when I start a project, 
                        but figuring it out is part of what makes creating things so enjoyable. I want to continue developing 
                        my skills, taking on new challenges, and creating increasingly ambitious projects that I can be proud 
                        of. </p>
                </div>
            </div>
        </div>
    )
}