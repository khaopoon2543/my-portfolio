import React from 'react'
import './skills.css'
import { ProgrammingLanguages, FrameworksLibraries, Databases, ToolsDesigns } from "./DataSkills";
import { BiCode } from 'react-icons/bi';
import { TbTools, TbDatabase } from 'react-icons/tb';

function CheckProblemsLogo(skill) {
    if (skill == "BeautifulSoup") {
        return "problem-bsp"
    } else if (skill == "PremierePro") {
        return "problem-prep"
    } return  ""
}

function AllSkills(skills) {
    const SKILLS = skills.map((skill) => {
        return  <div className="skills_data"  id={CheckProblemsLogo(skill)}>
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
                        <BiCode/> Programming Languages
                    </h4>
                    <div className="skills_info">
                        {AllSkills(ProgrammingLanguages)}
                    </div>
                </div>

                <div className="skills">
                    <h4 className="skills_head">
                        <BiCode/> Frameworks & Libraries
                    </h4>
                    <div className="skills_info">
                        {AllSkills(FrameworksLibraries)}
                    </div>
                </div>

                <div className="skills">
                    <h4 className="skills_head">
                        <TbDatabase/> Databases
                    </h4>
                    <div className="skills_info">
                        {AllSkills(Databases)}
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