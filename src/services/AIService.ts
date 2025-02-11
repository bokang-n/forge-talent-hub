
import { toast } from "@/components/ui/use-toast";

export interface AIResponse {
  text: string;
  imageUrl?: string;
}

class AIService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async generateResponse(prompt: string): Promise<AIResponse> {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: 'You are an AI career guide helping users learn technology skills.'
            },
            { role: 'user', content: prompt }
          ],
        }),
      });

      const data = await response.json();
      const text = data.choices[0].message.content;

      return { text };
    } catch (error) {
      console.error('Error generating AI response:', error);
      toast({
        title: "Error",
        description: "Failed to generate AI response. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  }

  async generateImage(prompt: string): Promise<string> {
    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          prompt,
          n: 1,
          size: '512x512',
        }),
      });

      const data = await response.json();
      return data.data[0].url;
    } catch (error) {
      console.error('Error generating image:', error);
      toast({
        title: "Error",
        description: "Failed to generate image. Please try again.",
        variant: "destructive",
      });
      throw error;
    }
  }
}

export const aiService = new AIService(process.env.OPENAI_API_KEY || '');
export default AIService;
