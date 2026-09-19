import ladyScarlet from '../assets/portraits/lady_scarlet.png';
import mistressIvory from '../assets/portraits/mistress_ivory.png';
import dommeHex from '../assets/portraits/domme_hex.png';
import patrolMinion from '../assets/portraits/patrol_minion.png';
import beachTease from '../assets/portraits/beach_tease.png';
import collarRunner from '../assets/portraits/collar_runner.png';
import vineBinder from '../assets/portraits/vine_binder.png';
import whisperScout from '../assets/portraits/whisper_scout.png';
import altarAcolyte from '../assets/portraits/altar_acolyte.png';
import marketVendor from '../assets/portraits/market_vendor.png';

/** Vite-resolved portrait URLs keyed by character id. */
export const PORTRAITS: Record<string, string> = {
  lady_scarlet: ladyScarlet,
  mistress_ivory: mistressIvory,
  domme_hex: dommeHex,
  patrol_minion: patrolMinion,
  beach_tease: beachTease,
  collar_runner: collarRunner,
  vine_binder: vineBinder,
  whisper_scout: whisperScout,
  altar_acolyte: altarAcolyte,
  market_vendor: marketVendor,
};

export function getPortrait(characterId: string): string | undefined {
  return PORTRAITS[characterId];
}
