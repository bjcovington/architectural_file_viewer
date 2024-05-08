// frontend/src/components/FileUpload.tsx
import React, { useState } from 'react';
import api from '../utils/api';

interface FileUploadProps {
  user: any;  // User information passed to the component
  onUploadSuccess: (message: string) => void;  // Callback when upload succeeds
}

const FileUpload: React.FC<FileUploadProps> = ({ user, onUploadSuccess }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null);
  };

  const handleFileUpload = async () => {
    if (!file) {
      console.warn("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);  // Append the file to the FormData object

    try {
      await api.post(`/project-files/${user.userid}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onUploadSuccess('File uploaded successfully!');
    } catch (error) {
      console.error('File upload failed:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
};

export default FileUpload;
