/** @jsxRuntime classic /
// pages/projects/index.jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default () => {
  const projects = new Array(15).fill(1).map((e, i) => ({id: i, title: `This is my project ${i}`}))

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Projects</h1>

      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {projects.map(project => (
          <div sx={{width: '33%', p: 2}}>
            <Link key={project.id} href="/projects/[id]" as={`/projects/${project.id}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{project.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}