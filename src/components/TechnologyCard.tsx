import type { Technology } from '../types'
import StarRating from './StarRating'

interface Props {
  tech: Technology
  isAdded: boolean
  onAdd: (tech: Technology) => void
}

export default function TechnologyCard({ tech, isAdded, onAdd }: Props) {
  return (
    <div
      className={`flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
        isAdded ? 'border-emerald-300' : 'border-slate-200 hover:border-slate-300'
      }`}
    >
      <div className="mb-3 flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="h-9 w-9 object-contain" />
        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-ink">{tech.name}</h3>
      <p className="mt-1 flex-1 text-sm text-slate-500">{tech.description}</p>

      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
          {tech.category}
        </span>
        <span className="text-slate-500">{tech.difficulty}</span>
        <StarRating rating={tech.rating} />
      </div>

      <button
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`mt-4 w-full rounded-lg py-2.5 text-sm font-semibold transition ${
          isAdded
            ? 'cursor-not-allowed bg-emerald-50 text-emerald-600'
            : 'bg-ink text-white hover:opacity-90'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}