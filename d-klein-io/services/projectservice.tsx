export default async function getServerSideProps () {
  interface Project {
    id: string,
    title: string,
    type: string,
    description: string,
    downloadLink: string
  }
  const response = await fetch('http://localhost:3000/getProjects')
  const data = await response.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return { 
    props: { data } 
  }
}

