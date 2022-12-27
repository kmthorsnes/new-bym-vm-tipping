export function translateCountry(input: string): string {
  switch (input.toLowerCase()) {
    case "croatia":
      return "kroatia";
    default:
      return input;
  }
}

export function capitalize(input: string): string {
  const words = input.split(" ");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
}