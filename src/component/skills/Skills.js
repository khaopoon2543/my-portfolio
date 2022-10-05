import React from 'react'
import './skills.css'
import { FrontendSkills, BackendSkills, ToolsDesigns } from "./DataSkills";
import { BiCode, BiColorFill } from 'react-icons/bi';
import { TbTools } from 'react-icons/tb';

function AllSkills(skills) {
    const SKILLS = skills.map((skill) => {
        return  <div className="skills_data">
                    <div className="skills_pic">
                        <img src={require(`../../assets/${skill.toLowerCase()}.svg`)} alt={skill}/>
                    </div>
                    <h3 className="skills_name">{skill}</h3>
                </div>
    })
    return SKILLS
}

function Skills() {
    return (
        <section id="skills">
            <h5>What I Know</h5>
            <h2>📚 Skills</h2>
            
            <div className="container skills_container">
                <div className="skills">
                    <h4 className="skills_head">
                        <BiCode/> Frontend Development
                    </h4>
                    <div className="skills_info">
                        {AllSkills(FrontendSkills)}
                    </div>
                </div>

                <div className="skills">
                    <h4 className="skills_head">
                        <BiCode/> Backend Development
                    </h4>
                    <div className="skills_info">
                        {AllSkills(BackendSkills)}
                    </div>
                </div>

                <div className="skills">
                    <h4 className="skills_head">
                        <TbTools /> Tools & Designs
                    </h4>
                    <div className="skills_info">
                        {AllSkills(ToolsDesigns)}
                    </div>
                </div>

          
            </div>
        </section>
    )
}

export default Skills;