import React from 'react';
import { Bot, FileText, Upload } from 'lucide-react';
import { Button } from './Button';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#EFDCF9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#603F8B] mb-6">
            Transform Your PDFs with AI – Chat with Your Documents
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Upload, Interact, and Get Insights from Your PDFs like Never Before
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg">
              Get Started Today – Try it Free
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Upload className="w-12 h-12 text-[#603F8B] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Easy Upload</h3>
              <p className="text-gray-600">Drag and drop your PDFs or click to upload</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Bot className="w-12 h-12 text-[#603F8B] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI-Powered Chat</h3>
              <p className="text-gray-600">Chat naturally with your documents</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <FileText className="w-12 h-12 text-[#603F8B] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Instant Insights</h3>
              <p className="text-gray-600">Get summaries and key information instantly</p>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#603F8B]">1M+</div>
              <div className="text-gray-600">PDFs Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#603F8B]">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#603F8B]">4.9/5</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}