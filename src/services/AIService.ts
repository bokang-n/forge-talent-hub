
import { toast } from "@/components/ui/use-toast";

const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

export type AIResponse = {
  message: string;
  error?: string;
};

export const generateAIResponse = async (prompt: string): Promise<AIResponse> => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  if (!apiKey) {
    toast({
      title: "API Key Missing",
      description: "Please provide your OpenAI API key in the environment variables.",
      variant: "destructive",
    });
    return {
      message: "",
      error: "API key is missing",
    };
  }

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI career guide assistant.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return {
      message: data.choices[0].message.content,
    };
  } catch (error) {
    console.error('AI response generation error:', error);
    toast({
      title: "Error",
      description: "Failed to generate AI response. Please try again.",
      variant: "destructive",
    });
    return {
      message: "",
      error: error.message,
    };
  }
};
