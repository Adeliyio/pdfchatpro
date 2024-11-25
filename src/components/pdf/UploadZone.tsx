import React, { useCallback } from 'react';
import { Upload, File } from 'lucide-react';
import { Button } from '../Button';

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
}

export function UploadZone({ onFileSelect }: UploadZoneProps) {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file?.type === 'application/pdf') {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file?.type === 'application/pdf') {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-primary transition-colors"
    >
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileInput}
        className="hidden"
        id="pdf-upload"
      />
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-4 text-lg font-medium text-gray-900">Upload your PDF</h3>
      <p className="mt-2 text-sm text-gray-500">Drag and drop or click to select</p>
      <label htmlFor="pdf-upload">
        <Button className="mt-4" variant="outline">
          <File className="w-4 h-4 mr-2" />
          Select PDF
        </Button>
      </label>
    </div>
  );
}