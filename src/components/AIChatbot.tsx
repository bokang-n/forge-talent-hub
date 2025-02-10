import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MessageCircle, Send, Image, Mic } from "lucide-react";
import { Input } from "@/components/ui/input";
import { aiService } from "@/services/AIService";
import { useToast } from "@/components/ui/use-toast";

type Message = {
  type: "bot" | "user";
  content: string;
  imageUrl?: string;
  options?: string[];
};

const AIChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "Hi! I'm your AI career guide. How can I help you today?",
      options: ["Take Talent Survey", "Generate Course Preview", "Chat with AI"],
    },
  ]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isGenerating) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
    setIsGenerating(true);

    try {
      const response = await aiService.generateResponse(userMessage);
      setMessages((prev) => [...prev, { 
        type: "bot", 
        content: response.text,
        imageUrl: response.imageUrl,
        options: ["Generate Image", "Take Survey", "Explore Courses"],
      }]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get AI response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateImage = async () => {
    if (isGenerating) return;
    setIsGenerating(true);

    try {
      const imageUrl = await aiService.generateImage("A modern professional learning environment with technology");
      setMessages((prev) => [...prev, { 
        type: "bot", 
        content: "I've generated a preview image for you:",
        imageUrl,
      }]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleOptionClick = async (option: string) => {
    setMessages((prev) => [...prev, { type: "user", content: option }]);

    if (option === "Generate Course Preview") {
      await handleGenerateImage();
    } else {
      // Handle other options...
      setMessages((prev) => [...prev, { 
        type: "bot", 
        content: `I'll help you with ${option.toLowerCase()}.`,
        options: ["Take Survey", "Generate Image", "Explore Courses"],
      }]);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 rounded-full h-12 w-12 p-0 shadow-lg hover:shadow-xl transition-shadow"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90vw] sm:w-[400px] flex flex-col h-full">
        <SheetHeader>
          <SheetTitle>AI Career Guide</SheetTitle>
        </SheetHeader>
        <div className="flex-grow overflow-auto py-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p>{message.content}</p>
                {message.imageUrl && (
                  <img 
                    src={message.imageUrl} 
                    alt="Generated preview"
                    className="mt-2 rounded-lg max-w-full h-auto"
                  />
                )}
                {message.options && message.type === "bot" && (
                  <div className="space-y-2 mt-2">
                    {message.options.map((option, i) => (
                      <Button
                        key={i}
                        variant="secondary"
                        className="w-full text-left"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSend} className="flex gap-2 pt-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow"
            disabled={isGenerating}
          />
          <Button 
            type="button" 
            size="icon" 
            variant="outline"
            onClick={handleGenerateImage}
            disabled={isGenerating}
          >
            <Image className="h-4 w-4" />
          </Button>
          <Button type="submit" size="icon" disabled={isGenerating}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default AIChatbot;
