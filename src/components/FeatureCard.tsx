import type { LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
};

export function FeatureCard({ icon: Icon, title, description, number }: FeatureCardProps) {
  return (
    <article className="group rounded-2xl border border-[#e5e9e3] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#c9d7c8] hover:shadow-[0_14px_40px_rgba(23,76,60,0.07)]">
      <div className="mb-9 flex items-center justify-between">
        <span className="grid size-11 place-items-center rounded-xl bg-[#edf3e9] text-[#174c3c]"><Icon size={20} strokeWidth={1.8} /></span>
        <span className="font-mono text-xs text-[#98a19b]">{number}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold tracking-[-0.03em]">{title}</h3>
      <p className="text-sm leading-6 text-[#68736d]">{description}</p>
    </article>
  );
}
