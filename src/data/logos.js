// Collection of placeholder logos for demonstration
export const logoUrls = Array.from({ length: 50 }, (_, i) => `/api/placeholder/120/60?text=Logo${i + 1}`);

// Helper function to get random logos for the scroll section
export const getRandomLogos = (count) => {
  const shuffled = [...logoUrls].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};