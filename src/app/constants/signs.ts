export interface SignInfo {
  name: string,
  start: string;
  end: string;
  element: string;
  planet: string;
  quality: string;
}

export type SignName =
| "aries"
| "taurus"
| "gemini"
| "cancer"
| "leo"
| "virgo"
| "libra"
| "scorpio"
| "sagittarius"
| "capricorn"
| "aquarius"
| "pisces"

export type Sign = Record<SignName, SignInfo>

export const SIGNS: Sign = {
  aries: {
    name: "aries",
    start: 'March 21',
    end: 'April 19',
    element: 'fire',
    planet: 'Mars',
    quality: 'cardinal'
  },
  taurus: {
    name: "taurus",
    start: 'April 20',
    end: 'May 20',
    element: 'earth',
    planet: 'Venus',
    quality: 'fixed'
  },
  gemini: {
    name: "gemini",
    start: 'May 21',
    end: 'June 20',
    element: 'air',
    planet: 'Mercury',
    quality: 'mutable'
  },
  cancer: {
    name: "cancer",
    start: 'June 21',
    end: 'July 22',
    element: 'water',
    planet: 'Moon',
    quality: 'cardinal'
  },
  leo: {
    name: "leo",
    start: 'July 23',
    end: 'August 22',
    element: 'fire',
    planet: 'Sun',
    quality: 'fixed'
  },
  virgo: {
    name: "virgo",
    start: 'August 23',
    end: 'September 22',
    element: 'earth',
    planet: 'Mercury',
    quality: 'mutable'
  },
  libra: {
    name: "libra",
    start: 'September 23',
    end: 'October 22',
    element: 'air',
    planet: 'Venus',
    quality: 'cardinal'
  },
  scorpio: {
    name: "scorpio",
    start: 'October 23',
    end: 'November 21',
    element: 'water',
    planet: 'Pluto',
    quality: 'fixed'
  },
  sagittarius: {
    name: "sagittarius",
    start: 'November 22',
    end: 'December 21',
    element: 'fire',
    planet: 'Jupiter',
    quality: 'mutable'
  },
  capricorn: {
    name: "capricorn",
    start: 'December 22',
    end: 'January 19',
    element: 'earth',
    planet: 'Saturn',
    quality: 'cardinal'
  },
  aquarius: {
    name: "aquarius",
    start: 'January 20',
    end: 'February 18',
    element: 'air',
    planet: 'Uranus',
    quality: 'fixed'
  },
  pisces: {
    name: "pisces",
    start: 'February 19',
    end: 'March 20',
    element: 'water',
    planet: 'Neptune',
    quality: 'mutable'
  }
};
