'use server';

/**
 * @fileOverview Generates a personalized love letter using AI based on user input.
 *
 * - generatePersonalizedLoveLetter - A function that generates the love letter.
 * - GeneratePersonalizedLoveLetterInput - The input type for the generatePersonalizedLoveLetter function.
 * - GeneratePersonalizedLoveLetterOutput - The return type for the generatePersonalizedLoveLetter function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedLoveLetterInputSchema = z.object({
  prompt: z.string().describe('A prompt to guide the love letter generation.'),
  relationshipHistory: z
    .string()
    .describe('A description of the relationship history.'),
});
export type GeneratePersonalizedLoveLetterInput = z.infer<
  typeof GeneratePersonalizedLoveLetterInputSchema
>;

const GeneratePersonalizedLoveLetterOutputSchema = z.object({
  loveLetter: z.string().describe('The AI-generated personalized love letter.'),
});
export type GeneratePersonalizedLoveLetterOutput = z.infer<
  typeof GeneratePersonalizedLoveLetterOutputSchema
>;

export async function generatePersonalizedLoveLetter(
  input: GeneratePersonalizedLoveLetterInput
): Promise<GeneratePersonalizedLoveLetterOutput> {
  return generatePersonalizedLoveLetterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedLoveLetterPrompt',
  input: {schema: GeneratePersonalizedLoveLetterInputSchema},
  output: {schema: GeneratePersonalizedLoveLetterOutputSchema},
  prompt: `You are an AI assistant designed to generate personalized love letters. Use the provided prompt and relationship history to create a heartfelt and unique message for the user's Valentine.\n\nPrompt: {{{prompt}}}\nRelationship History: {{{relationshipHistory}}}`,
});

const generatePersonalizedLoveLetterFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedLoveLetterFlow',
    inputSchema: GeneratePersonalizedLoveLetterInputSchema,
    outputSchema: GeneratePersonalizedLoveLetterOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
