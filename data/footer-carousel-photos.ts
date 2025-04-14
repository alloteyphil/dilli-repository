// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Original photos array
const originalPhotos = [
  "/images/footer1.png",
  "/images/footer2.png",
  "/images/footer3.png",
  "/images/footer4.png",
  "/images/footer5.png",
  "/images/footer6.png",
  "/images/footer7.png",
  "/images/footer8.png",
  "/images/footer9.png",
  "/images/footer10.png",
  "/images/footer11.png",
  "/images/footer12.png",
  "/images/footer13.png",
  "/images/footer14.png",
  "/images/footer15.png",
  "/images/footer16.png",
  "/images/footer17.png",
  "/images/footer18.png",
  "/images/footer19.png",
  "/images/footer20.png",
  "/images/footer21.png",
  "/images/footer22.png",
  "/images/footer23.png",
  "/images/footer24.png",
  "/images/footer25.png",
  "/images/footer26.png",
  "/images/footer27.png",
  "/images/footer28.png",
  "/images/footer29.png",
  "/images/footer30.png",
  "/images/footer31.png",
  "/images/footer32.png",
  "/images/footer33.png",
  "/images/footer34.png",
  "/images/footer35.png",
  "/images/footer36.png",
];

// Export the shuffled photos array
export const photos = shuffleArray(originalPhotos);
