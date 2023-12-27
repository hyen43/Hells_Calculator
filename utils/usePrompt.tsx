type PromptProps = {
  breakfast: string;
  lunch: string;
  dinner: string;
  snack: string;
};

// eslint-disable-next-line import/prefer-default-export
export function usePrompt({ breakfast, lunch, dinner, snack }: PromptProps) {
  const prompt: string[] = [];

  if (breakfast) {
    prompt.push(`아침: ${breakfast}`);
  }
  if (lunch) {
    prompt.push(`점심: ${lunch}`);
  }
  if (dinner) {
    prompt.push(`저녁: ${dinner}`);
  }
  if (snack) {
    prompt.push(`간식: ${snack}`);
  }
  // console.log("prompt", prompt.join(", "));
  return prompt.join(", ");
}
