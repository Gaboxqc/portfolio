const TYPE_COLORS: string[] = [
  "border-blue-400 text-blue-400",
  "border-purple-400 text-purple-400",
  "border-pink-400 text-pink-400",
  "border-cyan-400 text-cyan-400",
  "border-indigo-400 text-indigo-400",
  "border-teal-400 text-teal-400",
];

const hashString = (str: string): number =>
  str.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);

export const getProjectTypeStyle = (name = ""): string =>
  TYPE_COLORS[hashString(name.toLowerCase()) % TYPE_COLORS.length];
