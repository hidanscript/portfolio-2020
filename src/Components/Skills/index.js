import React, { useState, useEffect } from 'react';
import { 
         ReactSkill, 
         ExpressSkill, 
         GraphQLSkill, 
         ReduxSkill, 
         MongoDBSkill, 
         JavascriptSkill,
         PythonSkill,
         GoSkill,
         SQLServerSkill,
         JestSkill
        } from './SkillList';
import SkillCard from './SkillCard';
import './index.css';

export default function Skills() {

    const [ skillsLanguages , setSkillsLanguages ] = useState([]);
    const [ skillsFrameworks , setSkillsFrameworks ] = useState([]);
    const [ skillsDatabases , setSkillsDatabases ] = useState([]);

    useEffect(() => {

        const skillListLanguages = [ JavascriptSkill, PythonSkill, GoSkill ];
        const skillListFrameworks = [ ReactSkill, ExpressSkill, GraphQLSkill, ReduxSkill, JestSkill ];
        const skillListDatabases = [  MongoDBSkill, SQLServerSkill ];

        setSkillsLanguages(skillListLanguages);
        setSkillsFrameworks(skillListFrameworks);
        setSkillsDatabases(skillListDatabases);

    }, []);

    const renderSkillCards = skill => {
        return <SkillCard title={skill.title} desc={skill.desc} image={skill.image} alt={skill.alt} rank={skill.rank} />;
    }

    const skillCardsListLanguages = skillsLanguages.map(renderSkillCards);
    const skillCardsListFrameworks = skillsFrameworks.map(renderSkillCards);
    const skillCardsListDatabases = skillsDatabases.map(renderSkillCards);

    return(
        <div id="skills" className="skill-board">
            <h2 className="skillboard-title">Skills</h2>
            <h2 className="skillboard-title">Programming Languages</h2>
            <div className="skills">
                { skillCardsListLanguages }
            </div>
            <h2 className="skillboard-title">Frameworks & Libraries</h2>
            <div className="skills">
                { skillCardsListFrameworks }
            </div>
            <h2 className="skillboard-title">Databases</h2>
            <div className="skills">
                { skillCardsListDatabases }
            </div>
        </div>
    );
}