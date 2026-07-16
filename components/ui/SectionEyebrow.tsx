interface SectionEyebrowProps {
  label: string;
  code?: string;
}

export function SectionEyebrow({ label, code }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-2 mb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-runway-700/5 border border-runway-700/20 rounded-full">
        <span className="font-mono-text text-xs uppercase tracking-widest text-runway-700">
          {label}
        </span>
        {code && (
          <>
            <span className="text-runway-700/30">·</span>
            <span className="font-mono-text text-xs text-runway-700/60">{code}</span>
          </>
        )}
      </div>
    </div>
  );
}
