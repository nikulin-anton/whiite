const availableColors: string[] = ['#FFEEE2', '#DAEFDE', '#E5F5F9', '#E3E7F6'];
const counters: Record<string, number> = {};

export function getColor(entityName: string): string {
  if (!counters[entityName]) {
    counters[entityName] = 0;
  }

  const currentIndex = counters[entityName];

  counters[entityName] =
    currentIndex === availableColors.length - 1 ? 0 : currentIndex + 1;

  return availableColors[currentIndex];
}
