import type { CharacterTemplate } from '../types/game';

/** All characters are explicitly 21+ adults. */
export const DOMMES: Record<string, CharacterTemplate> = {
  lady_scarlet: {
    id: 'lady_scarlet',
    name: 'Lady Scarlet',
    age: 29,
    title: 'The Crimson Countess',
    personality: 'Theatrical, sadistic, obsessed with public humiliation and ruined orgasms.',
    description:
      'Scarlet (29) sweeps through crimson halls in silk and heels. She wants an audience for your shame — even if the audience is only the mirrors.',
    specialties: ['ruined_touch', 'spank_count', 'spit_and_step', 'strap_thrust', 'teasing_words'],
    maxArousal: 100,
    isBoss: true,
    mansionId: 'mansion_scarlet',
    encounterText:
      'Lady Scarlet lounges on a velvet throne, wine in hand. "Another lost toy washed up on my island. Kneel. Entertain me."',
    defeatText:
      'Scarlet\'s composure cracks. She cums hard against her own throne, cursing you even as she shudders. "Don\'t you dare tell the others…" Orgasm claimed.',
    victoryText:
      'Scarlet forces you over the edge with a ruined, humiliating climax while her mirrors watch. She toasts your failure. "Delicious. Come back when you want seconds."',
  },
  mistress_ivory: {
    id: 'mistress_ivory',
    name: 'Mistress Ivory',
    age: 32,
    title: 'The Pale Sovereign',
    personality: 'Cold, precise, elegant. Psychological ownership over brute force.',
    description:
      'Ivory (32) never raises her voice. Marble halls and whispered commands are enough; your body obeys before your pride does.',
    specialties: ['velvet_command', 'mind_break', 'ice_and_fire', 'ownership_mark', 'edge_stroke'],
    maxArousal: 110,
    isBoss: true,
    mansionId: 'mansion_ivory',
    encounterText:
      'Mistress Ivory regards you like a stain on white marble. "Speak only when ordered. Fail me beautifully."',
    defeatText:
      'Ivory\'s perfect mask slips as climax takes her — a soft, furious moan she immediately regrets. "…Unacceptable. And yet." You scored the win.',
    victoryText:
      'Ivory edges you with ice and words until you break, sobbing through orgasm at her feet. "Predictable. Wipe yourself up."',
  },
  domme_hex: {
    id: 'domme_hex',
    name: 'Domme Hex',
    age: 26,
    title: 'The Thorn Witch',
    personality: 'Chaotic, bratty-top energy, mind games, sensation overload.',
    description:
      'Hex (26) cackles from her thorn spire, neon runes flickering. She mixes mockery, magic-flavored dirty talk, and vicious sensation play.',
    specialties: ['mind_break', 'ice_and_fire', 'tongue_service', 'ruined_touch', 'spit_and_step'],
    maxArousal: 95,
    isBoss: true,
    mansionId: 'mansion_hex',
    encounterText:
      'Hex drops from a rafter upside-down, grinning. "Ooh, fresh nerves. Let\'s scramble them until you cream yourself stupid."',
    defeatText:
      'Hex laughs through her own climax, thorns and neon blurring. "Fuck — okay, okay, you win, you absolute menace." Orgasm extracted.',
    victoryText:
      'Hex overloads every sense until you climax helplessly, drooling praise. "Told you. Brains are just another erogenous zone."',
  },
};

export const DOMME_LIST = Object.values(DOMMES);

export function getDomme(id: string): CharacterTemplate {
  const d = DOMMES[id];
  if (!d) throw new Error(`Unknown Domme: ${id}`);
  return d;
}

export const MANSION_FLAVOR: Record<string, string[]> = {
  lady_scarlet: [
    'Mirrors line every corridor. Scarlet wants you to watch yourself kneel.',
    'A gallery of collars hangs like trophies. Yours would look lovely in crimson.',
    'The ballroom smells of wine, leather, and someone else\'s ruined dignity.',
  ],
  mistress_ivory: [
    'Silence presses in. Even your footsteps feel like they need permission.',
    'A single chair faces a kneeling cushion. The hierarchy is architecture here.',
    'Ivory\'s study holds contracts written in elegant script. Consent, ownership, footnotes.',
  ],
  domme_hex: [
    'Thorns scrape the walls. Neon sigils pulse like a heartbeat.',
    'Hex\'s "lab" is toys, candles, and notebooks titled How to Break Brats Faster.',
    'Somewhere above, Hex sings off-key about melting minds. Charming.',
  ],
};
