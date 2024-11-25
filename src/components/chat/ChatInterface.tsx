import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../Button';
import { ChatMessage } from './ChatMessage';

interface Message {
  id: string;
  text: string;
  isAi: boolean;
  timestamp: Date;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isAi: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: 'I understand your question about the PDF. Let me analyze that for you...',
      isAi: true,
      timestamp: new Date(),
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      <div className="flex-1 overflow-y-auto space-y-4 p-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.text}
            isAi={message.isAi}
            timestamp={message.timestamp}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about your PDF..."
            className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <Button type="submit">
            <Send className="w-4 h-4 mr-2" />
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}