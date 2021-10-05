function returnLevel(rate: number): string {
  if (rate < 3) {
    return 'Bad';
  }

  if (rate < 5) {
    return 'Normal';
  }

  if (rate < 8) {
    return 'Good';
  }

  if (rate < 10) {
    return 'Very good';
  }

  return 'Awesome';
}

export default returnLevel;
