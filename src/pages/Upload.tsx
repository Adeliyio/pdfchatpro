import React, { useState } from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { UploadZone } from '../components/pdf/UploadZone';
import { Button } from '../components/Button';
import { MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const handleStartChat = () => {
    // Here you would typically upload the file first
    navigate('/chat');
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Upload PDF</h1>
        
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <UploadZone onFileSelect={handleFileSelect} />
            
            {selectedFile && (
              <div className="mt-6">
                <h3 className="font-medium mb-2">Selected File:</h3>
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div>
                    <p className="font-medium">{selectedFile.name}</p>
                    <p className="text-sm text-gray-500">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <Button onClick={handleStartChat}>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Start Chat
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}