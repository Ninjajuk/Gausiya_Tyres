import React, { useState } from "react";
import { motion } from "framer-motion";

const ImageCompressor = () => {
  const [image, setImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [compressionLevel, setCompressionLevel] = useState(80); // Default compression level (0-100)
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [isCompressing, setIsCompressing] = useState(false);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setOriginalSize(file.size); // Set original file size
      };
      reader.readAsDataURL(file);
    }
  };

  // Compress the image
  const compressImage = () => {
    if (!image) return;

    setIsCompressing(true);

    const img = new Image();
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Set canvas dimensions
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0);

      // Compress the image
      canvas.toBlob(
        (blob) => {
          const compressedUrl = URL.createObjectURL(blob);
          setCompressedImage(compressedUrl);
          setCompressedSize(blob.size); // Set compressed file size
          setIsCompressing(false);
        },
        "image/jpeg",
        compressionLevel / 100 // Compression quality (0 to 1)
      );
    };
  };

  // Download compressed image
  const downloadCompressedImage = () => {
    if (!compressedImage) return;

    const link = document.createElement("a");
    link.href = compressedImage;
    link.download = `compressed-image.jpg`;
    link.click();
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8">Image Compressor</h1>

      {/* Image Upload */}
      <div className="mb-8">
        <label
          htmlFor="image-upload"
          className="cursor-pointer border-2 border-dashed border-gray-400 p-6 rounded-lg flex flex-col items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <span className="text-gray-600">Upload Image</span>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Compression Slider */}
      {image && (
        <div className="w-full max-w-md mb-8">
          <label htmlFor="compression-level" className="block text-gray-700 mb-2">
            Compression Level: {compressionLevel}%
          </label>
          <input
            id="compression-level"
            type="range"
            min="0"
            max="100"
            value={compressionLevel}
            onChange={(e) => setCompressionLevel(e.target.value)}
            className="w-full"
          />
        </div>
      )}

      {/* File Size Display */}
      {image && (
        <div className="mb-8 text-center">
          <p className="text-gray-700">
            Original Size: {(originalSize / 1024).toFixed(2)} KB
          </p>
          {compressedSize > 0 && (
            <p className="text-gray-700">
              Compressed Size: {(compressedSize / 1024).toFixed(2)} KB
            </p>
          )}
        </div>
      )}

      {/* Compress Button */}
      {image && (
        <button
          onClick={compressImage}
          disabled={isCompressing}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg mb-8 disabled:bg-gray-400 hover:bg-blue-600 transition-colors"
        >
          {isCompressing ? "Compressing..." : "Compress Image"}
        </button>
      )}

      {/* Download Button */}
      {compressedImage && (
        <button
          onClick={downloadCompressedImage}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          Download Compressed Image
        </button>
      )}

      {/* Preview Images */}
      <div className="mt-8 flex space-x-8">
        {image && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Original Image</h2>
            <img src={image} alt="Original" className="max-w-xs rounded-lg shadow" />
          </div>
        )}
        {compressedImage && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Compressed Image</h2>
            <img
              src={compressedImage}
              alt="Compressed"
              className="max-w-xs rounded-lg shadow"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ImageCompressor;