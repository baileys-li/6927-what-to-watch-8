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

export function formatTime(timeInSeconds: number) : string {
  let result = '';

  const hours = Math.floor(timeInSeconds / 3600);
  result += hours ? `${hours}:` : '';

  const minutes = Math.floor(timeInSeconds / 60) - hours * 60;
  result +=  minutes ? `${minutes}:` : '';

  const seconds = Math.floor(timeInSeconds) - minutes * 60 - hours * 3600;
  result += `${seconds}`;
  return result;
}
