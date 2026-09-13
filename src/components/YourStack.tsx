import type { Technology } from '../types'

interface Props {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function YourStack({ stack, onRemove, onRemoveAll }: Props) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:sticky md:top-24">
      <h3 className="text-lg font-bold text-ink">Your Stack</h3>
      <p className="text-sm text-slate-500">
        {stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-4 flex items-center justify-center rounded-lg border border-dashed border-slate-200 py-10 text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="mt-4 flex flex-col gap-3">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <img src={tech.icon} alt={tech.name} className="h-7 w-7 object-contain" />
                  <div>
                    <p className="text-sm font-semibold text-ink">{tech.name}</p>
                    <p className="text-xs text-slate-500">{tech.category}</p>
                  </div>
                </div>
                <button
                  aria-label={`Remove ${tech.name}`}
                  onClick={() => onRemove(tech.id)}
                  className="text-slate-400 transition hover:text-rose-500"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-full border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 transition hover:bg-rose-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}