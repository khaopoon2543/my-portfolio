import React, { useState } from 'react'
import './projects.css'
import {DataProjects} from "./DataProjects";
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs';

function Tools(items) {
    const TOOLS = items.map((item) => {
        return  <img src={require(`../../assets/${item.toLowerCase()}.svg`)} alt="" />
    })
    return TOOLS
}

function AllProjects(projects) {
    const [isPlayGif, setIsPlayGif] = useState("");

    function isPlaying(isPlayGif,name) {
        if (isPlayGif==="") {        
            return setIsPlayGif(name)    
        } else if (isPlayGif!=="" && isPlayGif!==name) {
            return setIsPlayGif(name)
        } else if (isPlayGif===name) {
            return setIsPlayGif("")
        }
    }

    const PROJECTS = projects.map((project) => {
        return  <article class="project_item">
                    <div className="project_item-image" onClick={() => isPlaying(isPlayGif,project.name2)}>
                        {project.gif ?
                        <>
                            <img src={require(`../../assets/${(isPlayGif!==project.name2) ? project.image : project.gif}`)} alt="" />
                            {(isPlayGif!==project.name2) ? 
                                <button class="btn play"><BsFillPlayFill /></button>
                            :
                                <button class="btn pause"><BsFillPauseFill /></button>
                            }
                        </>
                        :
                            <img src={require(`../../assets/${project.image}`)} alt="" />
                        }
                        
                    </div>

                    <div className="project_item-info">

                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        
                        <div className="project_item-tools">
                            {project.tools &&
                                Tools(project.tools)
                            }
                        </div>

                        <div className="project_item-cta">
                            {project.github_link &&
                                <a href={project.github_link} className="btn" target="_blank">Github</a>
                            }
                            {project.prototype_link &&
                                <a href={project.prototype_link} className="btn" target="_blank">Prototype</a>
                            }
                            {project.presentation_link &&
                                <a href={project.presentation_link} className="btn" target="_blank">Presentation</a>
                            }
                            {project.demo_link &&
                                <a href={project.demo_link} className="btn btn-primary" target="_blank">Live Demo</a>
                            }
                        </div>

                    </div>

                </article>
    })
    return PROJECTS
}

function Projects() {
    return (
        <section id="projects">
            <h5>My Works</h5>
            <h2>💻 Projects</h2>

            <div class="container projects_container">
                {AllProjects(DataProjects)}
            </div>
        </section>
    )
}

export default Projects;