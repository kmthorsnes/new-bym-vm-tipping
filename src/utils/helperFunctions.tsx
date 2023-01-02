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

export function translateCountryCode(input: string): string {
  switch (input.toLowerCase()) {
    case "cro":
      return "hrv";
    default:
      return input;
  }
}

export const getData = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};
