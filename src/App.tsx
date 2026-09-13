import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import type { Technology } from './types'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologyGrid from './components/TechnologyGrid'
import Loader from './components/Loader'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [stack, setStack] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    fetch('/data/technologies.json')
      .then((res) => res.json())
      .then((data: Technology[]) => setTechnologies(data))
      .catch(() => toast.error('Could not load technology data.'))
      .finally(() => setLoading(false))
  }, [])

  function handleAdd(tech: Technology) {
    const alreadyAdded = stack.some((t) => t.id === tech.id)
    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack.`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack.`)
  }

  function handleRemove(id: string) {
    const tech = stack.find((t) => t.id === id)
    setStack((prev) => prev.filter((t) => t.id !== id))
    if (tech) toast.info(`${tech.name} removed from your stack.`)
  }

  function handleRemoveAll() {
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {loading ? (
        <Loader />
      ) : (
        <TechnologyGrid
          technologies={technologies}
          stack={stack}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      )}
      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  )
}

export default App