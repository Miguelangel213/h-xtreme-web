import { ArrowLeft, ArrowRight } from "lucide-react";

const base =
  "btn-press flex size-12 items-center justify-center rounded-full border transition-colors duration-150 disabled:opacity-40 md:size-14";

export function ArrowButtons({
  onPrev,
  onNext,
  prevDisabled,
  nextDisabled,
}: {
  onPrev: () => void;
  onNext: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <button
        type="button"
        aria-label="Anterior"
        onClick={onPrev}
        disabled={prevDisabled}
        className={`${base} border-black/20 text-black/50 hover:border-black hover:text-black`}
      >
        <ArrowLeft className="size-5" aria-hidden />
      </button>
      <button
        type="button"
        aria-label="Siguiente"
        onClick={onNext}
        disabled={nextDisabled}
        className={`${base} border-black text-black hover:bg-black hover:text-white`}
      >
        <ArrowRight className="size-5" aria-hidden />
      </button>
    </div>
  );
}
