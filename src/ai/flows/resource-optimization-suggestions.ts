// Resource optimization suggestions flow

'use server';

/**
 * @fileOverview Analyzes resource utilization and suggests optimizations.
 *
 * - resourceOptimizationSuggestions - A function that handles the resource optimization process.
 * - ResourceOptimizationSuggestionsInput - The input type for the resourceOptimizationSuggestions function.
 * - ResourceOptimizationSuggestionsOutput - The return type for the resourceOptimizationSuggestions function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ResourceOptimizationSuggestionsInputSchema = z.object({
  resourceUtilizationData: z.string().describe('The utilization data of the resource.'),
});
export type ResourceOptimizationSuggestionsInput = z.infer<
  typeof ResourceOptimizationSuggestionsInputSchema
>;

const ResourceOptimizationSuggestionsOutputSchema = z.object({
  suggestions: z.string().describe('The suggestions for optimizing resource utilization.'),
});
export type ResourceOptimizationSuggestionsOutput = z.infer<
  typeof ResourceOptimizationSuggestionsOutputSchema
>;

export async function resourceOptimizationSuggestions(
  input: ResourceOptimizationSuggestionsInput
): Promise<ResourceOptimizationSuggestionsOutput> {
  return resourceOptimizationSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resourceOptimizationSuggestionsPrompt',
  input: {
    schema: z.object({
      resourceUtilizationData: z
        .string()
        .describe('The utilization data of the resource.'),
    }),
  },
  output: {
    schema: z.object({
      suggestions: z
        .string()
        .describe('The suggestions for optimizing resource utilization.'),
    }),
  },
  prompt: `You are an AI assistant specializing in resource optimization.

  Analyze the provided resource utilization data and provide clear, actionable suggestions for improvement.

  Resource Utilization Data: {{{resourceUtilizationData}}}
  `,
});

const resourceOptimizationSuggestionsFlow = ai.defineFlow<
  typeof ResourceOptimizationSuggestionsInputSchema,
  typeof ResourceOptimizationSuggestionsOutputSchema
>(
  {
    name: 'resourceOptimizationSuggestionsFlow',
    inputSchema: ResourceOptimizationSuggestionsInputSchema,
    outputSchema: ResourceOptimizationSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
