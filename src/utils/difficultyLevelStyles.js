const DIFFICULTY_STYLES = {
  junior: "border-green-400 text-green-400",
  intermediate: "border-yellow-400 text-yellow-400",
  advanced: "border-orange-400 text-orange-400",
  expert: "border-red-400 text-red-400",
}

export const getDifficultyStyle = (name = "") =>
  DIFFICULTY_STYLES[name.toLowerCase()] ?? "border-muted-foreground text-muted-foreground"