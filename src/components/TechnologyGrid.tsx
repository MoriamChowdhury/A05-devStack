import type { Technology } from '../types'
import TechnologyCard from './TechnologyCard'
import YourStack from './YourStack'

interface Props {
  technologies: Technology[]
  stack: Technology[]
  onAdd: (tech: Technology) => void
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function TechnologyGrid({ technologies, stack, onAdd, onRemove, onRemoveAll }: Props) {
  const stackIds = new Set(stack.map((t) => t.id))

  return (
    <section id="technologies" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-extrabold text-ink">
        Explore the <span className="brand-gradient-text">Technologies</span>
      </h2>
      <p className="mt-2 text-slate-500">Pick the technologies that build your ideal stack.</p>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              isAdded={stackIds.has(tech.id)}
              onAdd={onAdd}
            />
          ))}
        </div>

        <YourStack stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
      </div>
    </section>
  )
}