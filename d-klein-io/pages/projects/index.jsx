/** @jsxRuntime classic /
// pages/projects/index.jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import  fetchProjects from '../../services/projectservice'

const ProjectsPage = () => {
  const [myProjects, setMyProjects] = useState([]);
  
  useEffect( () => {
    grabProjects();
  }, [])
  
  async function grabProjects () {
    const result = await fetchProjects();
    const tempProjects =  result.props
    //setMyProjects(tempProjects);
    // yo
    console.log('DATA:  ', tempProjects);
  }

  const projects = myProjects

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Projects</h1>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {projects.map(project => (
          <div sx={{width: '33%', p: 2}}>
            <Link key={project.title} href="/projects/[title]" as={`/projects/${project.title}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{project.type}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage