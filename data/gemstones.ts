import { Gemstone } from '@/types';

export interface GemstoneExtended extends Gemstone {
  priceTier: 'Premium' | 'Elite' | 'Royal';
  rarity: number;
}

export const GEMSTONE_DATA: GemstoneExtended[] = [
  {
    id: '1',
    name: 'Blue Sapphire (Neelam)',
    color: 'Deep Blue',
    rulingPlanet: 'Saturn (Shani)',
    benefits: ['career growth', 'mental clarity', 'protection from financial loss'],
    suitableZodiacs: ['capricorn', 'aquarius'],
    imageUrl: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=400&auto=format&fit=crop',
    priceTier: 'Elite',
    rarity: 4
  },
  {
    id: '2',
    name: 'Ruby (Manik)',
    color: 'Crimson Red',
    rulingPlanet: 'Sun (Surya)',
    benefits: ['leadership qualities', 'health', 'self-confidence'],
    suitableZodiacs: ['leo', 'aries', 'scorpio'],
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400&auto=format&fit=crop',
    priceTier: 'Premium',
    rarity: 3
  },
  {
    id: '3',
    name: 'Emerald (Panna)',
    color: 'Green',
    rulingPlanet: 'Mercury (Budh)',
    benefits: ['wealth', 'intellect', 'business success'],
    suitableZodiacs: ['gemini', 'virgo', 'taurus'],
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop',
    priceTier: 'Royal',
    rarity: 5
  },
  {
    id: '4',
    name: 'Yellow Sapphire (Pukhraj)',
    color: 'Yellow',
    rulingPlanet: 'Jupiter (Guru)',
    benefits: ['wealth', 'relationships', 'good fortune'],
    suitableZodiacs: ['sagittarius', 'pisces'],
    imageUrl: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=400&auto=format&fit=crop',
    priceTier: 'Elite',
    rarity: 4
  }
];