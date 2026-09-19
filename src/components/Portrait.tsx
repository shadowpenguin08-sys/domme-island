import { getPortrait } from '../data/portraits';

interface Props {
  characterId: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Portrait({ characterId, name, size = 'md', className = '' }: Props) {
  const src = getPortrait(characterId);
  if (!src) return null;

  return (
    <div className={`portrait portrait-${size} ${className}`.trim()}>
      <img src={src} alt={name} loading="lazy" />
    </div>
  );
}
