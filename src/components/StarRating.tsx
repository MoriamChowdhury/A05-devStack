export default function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 text-sm font-medium text-slate-700">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
        <path d="M12 2l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17l-6.1 3.5 1.5-6.8L2.2 9l6.9-.7z" />
      </svg>
      {rating.toFixed(1)}
    </span>
  )
}