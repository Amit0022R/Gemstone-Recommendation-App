import { Gemstone, UserInput } from '@/types';
import { GEMSTONE_DATA } from '@/data/gemstones';

export function runRecommendationEngine(input: UserInput): Gemstone[] {
  const { zodiac, primaryConcern } = input;
  const lowerZodiac = zodiac.toLowerCase();

  const filtered = GEMSTONE_DATA.filter((gem) => {
    const matchesZodiac = gem.suitableZodiacs.includes(lowerZodiac);
    const matchesConcern = gem.benefits.some(benefit => 
      benefit.includes(primaryConcern.toLowerCase())
    );
    return matchesZodiac || matchesConcern;
  });

  return filtered.length > 0 ? filtered : [GEMSTONE_DATA[2]]; 
}