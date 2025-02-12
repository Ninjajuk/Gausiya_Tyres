import React, { useState } from "react";
import { motion } from "framer-motion";

const ImageConverter = () => {
  const [image, setImage] = useState(null);
  const [convertedImage, setConvertedImage] = useState(null);
  const [targetFormat, setTargetFormat] = useState("jpeg");
  const [isConverting, setIsConverting] = useState(false);

  // Available formats
  const formats = ["jpeg", "png", "webp", "gif", "bmp"];

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Convert image to the selected format
  const convertImage = () => {
    if (!image) return;

    setIsConverting(true);

    const img = new Image();
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      canvas.toBlob((blob) => {
        const convertedUrl = URL.createObjectURL(blob);
        setConvertedImage(convertedUrl);
        setIsConverting(false);
      }, `image/${targetFormat}`);
    };
  };

  // Download converted image
  const downloadImage = () => {
    if (!convertedImage) return;

    const link = document.createElement("a");
    link.href = convertedImage;
    link.download = `converted-image.${targetFormat}`;
    link.click();
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8">Image Converter</h1>

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

      {/* Format Selection Grid */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Select Target Format</h2>
        <div className="grid grid-cols-3 gap-4">
          {formats.map((format) => (
            <motion.div
              key={format}
              className={`p-4 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer ${
                targetFormat === format
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-blue-300"
              }`}
              onClick={() => setTargetFormat(format)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-gray-700 font-medium">{format.toUpperCase()}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Convert Button */}
      <button
        onClick={convertImage}
        disabled={!image || isConverting}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg mb-8 disabled:bg-gray-400 hover:bg-blue-600 transition-colors"
      >
        {isConverting ? "Converting..." : "Convert Image"}
      </button>

      {/* Download Button */}
      {convertedImage && (
        <button
          onClick={downloadImage}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          Download Converted Image
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
        {convertedImage && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Converted Image</h2>
            <img
              src={convertedImage}
              alt="Converted"
              className="max-w-xs rounded-lg shadow"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ImageConverter;