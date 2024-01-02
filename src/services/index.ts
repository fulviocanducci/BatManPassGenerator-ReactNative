import random from "randomstring";

export function generatePassService(n: number = 10): string {
  return random.generate(n);
}
