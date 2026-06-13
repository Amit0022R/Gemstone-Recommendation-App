export interface Gemstone {
  id: string;
  name: string;
  color: string;
  rulingPlanet: string;
  benefits: string[];
  suitableZodiacs: string[];
  imageUrl: string;
}

export interface UserInput {
  zodiac: string;
  primaryConcern: 'career' | 'health' | 'wealth' | 'relationships';
}