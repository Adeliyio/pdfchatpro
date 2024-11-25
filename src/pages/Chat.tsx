import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { ChatInterface } from '../components/chat/ChatInterface';

export function Chat() {
  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow">
        <div className="border-b px-6 py-4">
          <h2 className="text-xl font-semibold">Chat with your PDF</h2>
        </div>
        <ChatInterface />
      </div>
    </DashboardLayout>
  );
}