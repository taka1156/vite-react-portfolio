import React from 'react';
import SkillCard from '@/components/SkillCard/SkillCard';
import './Skill.css';
import { SkillCards } from '@/constants/index';

const View = () => {
  return (
    <>
      <h2>Portfolio</h2>
      <div className="skill">
        {SkillCards.map((sCard: SkillCard) => (
          <SkillCard key={sCard.skillName} card={sCard} />
        ))}
      </div>
    </>
  );
};

export default View;
