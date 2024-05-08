import React, { useEffect, useState } from 'react';
import api from '../utils/api';

interface ProjectFile {
  filename: string;
  content: string;
}

interface ProjectFilesProps {
  user: any;
}

const ProjectFiles: React.FC<ProjectFilesProps> = ({ user }) => {
  const [files, setFiles] = useState<ProjectFile[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await api.get(`/project-files/${user.userid}`);
        setFiles(response.data);
      } catch (error) {
        console.error('Failed to fetch project files:', error);
      }
    };

    fetchFiles();
  }, [user]);

  return (
    <div>
      <h2>Your Project Files</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <strong>{file.filename}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectFiles;
