import React, { useState, ChangeEvent } from 'react';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageUpload(file);
    }
  };

  return (
    <div className="container">
      <h2>Step 1: Preview Your Model</h2>
      <div className="upload-area">
        <p>Upload an image to preview your model (optional)</p>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      {previewUrl && (
        <img
          src={previewUrl}
          alt="Preview"
          className="preview-image"
          style={{ display: 'block' }}
        />
      )}
    </div>
  );
};

export default ImageUpload; 