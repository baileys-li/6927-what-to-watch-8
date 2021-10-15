export function normalizeTextToID(text: string): string {
  return text.toLowerCase().replace(' ', '_');
}

export function normalizeDateTime(dateTime: string): string {
  const date = new Date(dateTime);

  return date.toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' });
}

export function transformSnakeToCamelCase(snake: string): string {
  const words = snake.split('_');
  let camel = '';
  words.forEach((word, index) => {
    camel +=
      index === 0 ? word : word[0].toUpperCase() + word.slice(1);
  });

  return camel;
}


export function formatRunTime(time: number): string {
  const hours = Math.floor(time / 60);
  let result = hours ? `${hours}h ` : '';
  result += `${time % 60}m`;

  return result;
}
