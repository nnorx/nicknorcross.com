import React from 'react';
import HeroSectionProjects from './HeroSectionProjects';
import { projectsObjOne, projectsObjTwo } from './Data';

function Projects() {
  return (
    <>
      <HeroSectionProjects {...projectsObjOne} />
      <HeroSectionProjects {...projectsObjTwo} />
    </>
  );
}

export default Projects;
