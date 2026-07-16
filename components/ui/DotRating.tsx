interface DotRatingProps {
  dots: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}

export function DotRating({ dots, max = 5, size = 'md' }: DotRatingProps) {
  const sizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
  };

  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full ${sizes[size]} ${
            i < dots ? 'bg-beacon-500' : 'bg-fog-200'
          }`}
        />
      ))}
    </div>
  );
}
