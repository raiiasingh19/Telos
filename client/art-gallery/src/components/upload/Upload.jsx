import { useState } from 'react';
import '../../App.css';
import Form from '../form/Form';
// import axios from 'axios';

const UploadForm = () => {
  const [isUploadClicked, setIsUploadClicked] = useState(false)
  // Define the handleButtonClick function
  const handleUploadClick = () => {
    setIsUploadClicked (!isUploadClicked)
  };

  return (
    <div>
      <button onClick={handleUploadClick}>+</button>
      {isUploadClicked && (
        <Form />
      )}
    </div>
  );
};

export default UploadForm;









