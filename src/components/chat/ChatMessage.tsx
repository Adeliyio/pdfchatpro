import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isAi: boolean;
  timestamp: Date;
}

export function ChatMessage({ message, isAi, timestamp }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 ${isAi ? 'bg-gray-50' : 'bg-white'} p-4 rounded-lg`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isAi ? 'bg-primary text-white' : 'bg-secondary text-white'
      }`}>
        {isAi ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{isAi ? 'AI Assistant' : 'You'}</span>
          <span className="text-sm text-gray-500">
            {timestamp.toLocaleTimeString()}
          </span>
        </div>
        <p className="mt-1 text-gray-700">{message}</p>
      </div>
    </div>
  );
}