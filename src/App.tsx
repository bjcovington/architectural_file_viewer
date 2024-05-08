// frontend/src/App.tsx
import React, { useState } from 'react';
import './global.css'; 
import Login from './components/Login';
import ProjectFiles from './components/ProjectFiles';
import FileUpload from './components/FileUpload';

const App: React.FC = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [uploadMessage, setUploadMessage] = useState('');

  return (
    <div className="App"> {/* This is already centered by the Flexbox styling on the body */}
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <FileUpload
            user={user}
            onUploadSuccess={(message: string) => setUploadMessage(message)}
          />
          {uploadMessage && <p style={{ color: 'green' }}>{uploadMessage}</p>}
          <ProjectFiles user={user} />
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <Login setLoggedIn={setLoggedIn} setUser={setUser} />
      )}
    </div>
  );
};

export default App;
