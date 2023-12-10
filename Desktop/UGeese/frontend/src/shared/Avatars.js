// Avatars.js
import React from 'react';
import CivilEngineerGoose from '../assets/Goose/Goose1.svg';
import DesignerGoose from '../assets/Goose/Goose2.svg';
import BusinessGoose from '../assets/Goose/Goose3.svg';
import DeterminedGoose from '../assets/Goose/determinedgoose.svg';
import EngineerGoose from '../assets/Goose/engineergoose.svg';
import PilotGoose from '../assets/Goose/pilotgoose.svg';
import GraduateGoose from '../assets/Goose/graduategoose.svg';

const GooseAvatar = ({ name, size = 16 }) => {
  let avatarImage;
  let altText;

  switch (name) {
    case 'civilEngineer':
      avatarImage = CivilEngineerGoose;
      altText = 'Civil Engineer Goose Avatar';
      break;
    case 'designer':
      avatarImage = DesignerGoose;
      altText = 'Designer Goose Avatar';
      break;
    case 'business':
      avatarImage = BusinessGoose;
      altText = 'Business Goose Avatar';
      break;
    case 'determined':
      avatarImage = DeterminedGoose;
      altText = 'Determined Goose Avatar';
      break;
    case 'engineer':
      avatarImage = EngineerGoose;
      altText = 'Engineer Goose Avatar';
      break;
    case 'pilot':
      avatarImage = PilotGoose;
      altText = 'Pilot Goose Avatar';
      break;
    case 'graduate':
      avatarImage = GraduateGoose;
      altText = 'Graduate Goose Avatar';
      break;
    default:
      // Default to Civil Engineer Goose
      avatarImage = CivilEngineerGoose;
      altText = 'Civil Engineer Goose Avatar';
  }

  return (
    <div className={`w-${size} h-${size} text-gray-700`}>
      <img src={avatarImage} alt={altText} className="w-full h-full" />
    </div>
  );
};

export { GooseAvatar };
