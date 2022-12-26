export function translate(input: string): string {
    switch (input.toLowerCase()) {
      case 'croatia':
        return 'kroatia';
      default:
        return input;
    }
  }
