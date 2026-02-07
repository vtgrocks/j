'use server';

/**
 * @fileOverview Generates a reason why someone likes their partner.
 *
 * - generateReason - A function that generates the reason.
 * - GenerateReasonOutput - The return type for the generateReason function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateReasonOutputSchema = z.object({
  reason: z
    .string()
    .describe('A short, sweet, and unique reason why someone likes their partner.'),
});
export type GenerateReasonOutput = z.infer<typeof GenerateReasonOutputSchema>;

export async function generateReason(): Promise<GenerateReasonOutput> {
  return generateReasonFlow();
}

const prompt = ai.definePrompt({
  name: 'generateReasonPrompt',
  output: {schema: GenerateReasonOutputSchema},
  prompt: `You are an AI assistant that generates short, sweet, and unique reasons why someone likes their partner. Generate one reason. The reason should be a single sentence.

Here are some examples of the style you should follow:
- "You listen, even when you don’t understand."
- "You make normal days better."
- "You’re my favorite notification."
- "Your laugh is my favorite song."
- "You're the best part of my day."

Now, generate a new, unique reason.`,
});

const generateReasonFlow = ai.defineFlow(
  {
    name: 'generateReasonFlow',
    outputSchema: GenerateReasonOutputSchema,
  },
  async () => {
    const {output} = await prompt();
    return output!;
  }
);
