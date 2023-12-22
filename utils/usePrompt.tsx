// eslint-disable-next-line import/prefer-default-export

type PromptProps = {
  breakfast: string;
  lunch: string;
  dinner: string;
  snack: string;
};

export function usePrompt({ breakfast, lunch, dinner, snack }: PromptProps) {
  console.log("usePrompt");
}
