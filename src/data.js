// 1. Import your local images
import heroBg from './assets/images/hero-background.jpg';
import hallDivya from './assets/images/hall-divya.jpeg';
import hallShubh from './assets/images/hall-shubh.jpeg';
import hallMangalam from './assets/images/hall-mangalam.jpeg';

// Note: We can export the heroBg to use in the Hero component later
export const heroImage = heroBg;

// -----------------------------------------------------------------
// HALLS DATA
// -----------------------------------------------------------------
export const halls = [
  {
    id: "c7bfd857-bce1-48fb-8998-2612d3863fa1",
    name: "Divya Mandapam",
    location: "Chennai, Tamil Nadu",
    image: hallDivya, // Use the imported image
    description: "Grand traditional hall with golden pillars and divine architecture",
    guests: 500,
    price: "₹75,000/day",
    amenities: ["Air Conditioning", "Stage Setup", "Priest Arrangement"],
  },
  {
    id: "9c546f50-7e60-4796-8495-b6c261c3a2e1",
    name: "Shubh Vivah Hall",
    location: "Mumbai, Maharashtra",
    image: hallShubh, // Use the imported image
    description: "Elegant hall perfect for intimate wedding ceremonies",
    guests: 300,
    price: "₹50,000/day",
    amenities: ["Decorations", "Catering Service", "Mandap Setup"],
  },
  {
    id: "52586cfc-415b-4437-8847-ab4eae62742f",
    name: "Mangalam Gardens",
    location: "Bangalore, Karnataka",
    image: hallMangalam, // Use the imported image
    description: "Sprawling outdoor venue with traditional architecture",
    guests: 800,
    price: "₹120,000/day",
    amenities: ["Open Garden", "AC Halls", "Kitchen Facilities"],
  },
];

// -----------------------------------------------------------------
// PACKAGES DATA
// -----------------------------------------------------------------
export const packages = [
  {
    id: "f71a3342-16c4-4878-9b1e-9189b4381c23",
    type: "Vivāha",
    name: "Vivāha Supreme",
    description: "Complete wedding package with all traditional rituals",
    price: "₹150,000",
    duration: "Full Day",
    inclusions: [
      "Mandap Decoration",
      "Priest Services",
      "Photography",
      "Catering (500 guests)",
      "Music System",
    ],
  },
  {
    id: "c10423ff-b24c-4a2a-afe3-64a752500b30",
    type: "Utsava",
    name: "Utsava Celebration",
    description: "Festival and celebration package",
    price: "₹80,000",
    duration: "Half Day",
    inclusions: [
      "Stage Setup",
      "Sound & Lighting",
      "Decorations",
      "Catering (300 guests)",
    ],
  },
  {
    id: "66ccba55-b9c9-4cad-8b07-89584983ae70",
    type: "Saṃskāra",
    name: "Saṃskāra Ritual",
    description: "Traditional life ceremony package",
    price: "₹45,000",
    duration: "4 Hours",
    inclusions: [
      "Priest Arrangement",
      "Sacred Fire Setup",
      "Traditional Decorations",
      "Catering (150 guests)",
    ],
  },
  {
    id: "7b7d9ffa-5261-4715-90e3-2437469ce766",
    type: "Parivāra",
    name: "Parivāra Gathering",
    description: "Family reunion and gathering package",
    price: "₹35,000",
    duration: "6 Hours",
    inclusions: ["Hall Setup", "Audio Visual", "Refreshments", "Parking"],
  },
];

// -----------------------------------------------------------------
// TESTIMONIALS DATA
// -----------------------------------------------------------------
export const testimonials = [
  {
    id: "afaebfb2-9c22-45e8-bc4b-92410a35c363",
    rating: 5,
    review:
      "\"Our wedding at Divya Mandapam was magical! Every detail was perfect, from the divine decorations to the warm hospitality. Truly blessed!\"",
    author: "Priya & Rahul",
    event: "Wedding",
  },
  {
    id: "78a21a1d-a3cf-42bb-866f-3717cfed33c7",
    rating: 5,
    review:
      "\"Mangalam Gardens provided the perfect setting for our Griha Pravesh. The staff was incredibly helpful and the ambiance was divine.\"",
    author: "Anjali Sharma",
    event: "Housewarming",
  },
  {
    id: "6cc7b118-5d40-48c3-84cb-1b97fd0c4015",
    rating: 5,
    review:
      "\"Shubh Vivah Hall was ideal for our son's sacred thread ceremony. The traditional setup and priest arrangements were excellent.\"",
    author: "Venkat Family",
    event: "Upanayanam",
  },
];