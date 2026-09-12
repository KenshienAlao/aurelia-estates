export type ImageQuadrant =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface Property {
  name: string;
  location: string;
  price: string;
  type: string;
  specs: string;
  imagePosition: ImageQuadrant;
}

export const properties: Property[] = [
  {
    name: "Casa Aurelia",
    location: "Antipolo",
    price: "$1.2M",
    type: "Hillside residence",
    specs: "4 beds · 3 baths · 280 sqm",
    imagePosition: "bottom-right",
  },
  {
    name: "The Linden House",
    location: "Tagaytay",
    price: "$1.7M",
    type: "Country house",
    specs: "5 beds · 4 baths · 420 sqm",
    imagePosition: "top-left",
  },
  {
    name: "Solana Residences",
    location: "Makati",
    price: "$1.1M",
    type: "City residence",
    specs: "2 beds · 2 baths · 92 sqm",
    imagePosition: "top-right",
  },
  {
    name: "Amara Townhomes",
    location: "Quezon City",
    price: "$850K",
    type: "Modern townhouse",
    specs: "3 beds · 2 baths · 145 sqm",
    imagePosition: "bottom-left",
  },
];

export const locations = [
  {
    name: "Urban",
    description: "Considered homes at the center of culture and daily life.",
    imagePosition: "top-left" as const,
  },
  {
    name: "Coastal",
    description: "Residences shaped by open horizons and a slower rhythm.",
    imagePosition: "top-right" as const,
  },
  {
    name: "Suburban",
    description: "Room to grow, with the city still within reach.",
    imagePosition: "bottom-left" as const,
  },
  {
    name: "Countryside",
    description: "Quiet architecture in landscapes that invite pause.",
    imagePosition: "bottom-right" as const,
  },
];
