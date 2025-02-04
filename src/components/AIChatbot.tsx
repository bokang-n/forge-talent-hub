import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MessageCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hi! I'm your AI career guide. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: input }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: "I'm here to help! Please choose one of these options:",
          options: [
            "Take Talent Survey",
            "Explore Courses",
            "Contact Support",
          ],
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-4 right-4 rounded-full h-12 w-12 p-0"
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
                {message.options && (
                  <div className="space-y-2 mt-2">
                    {message.options.map((option, i) => (
                      <Button
                        key={i}
                        variant="secondary"
                        className="w-full"
                        onClick={() =>
                          setMessages((prev) => [
                            ...prev,
                            { type: "user", content: option },
                          ])
                        }
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} className="flex gap-2 pt-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default AIChatbot;