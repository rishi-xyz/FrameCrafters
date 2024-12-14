"use client"
import { useState } from "react";
import axios from "axios";
import { Uploadimage } from "@/src/api/meshy";

const Home = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [modelUrls, setModelUrls] = useState<any>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!imageUrl.trim()) return alert("Please enter a valid image URL!");

    setIsProcessing(true);

    try {
      const response = await Uploadimage({imageUrl});
      setModelUrls(response);
    } catch (error) {
      console.error("Error processing image:", error);
      alert("Failed to process the image. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Create a 3D Model from an Image URL</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <label htmlFor="imageUrl" style={{ display: "block", marginBottom: "0.5rem" }}>
          Enter Image URL:
        </label>
        <input
          type="url"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="https://example.com/image.jpg"
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          required
        />
        <button
          type="submit"
          disabled={isProcessing}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: isProcessing ? "#ddd" : "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: isProcessing ? "not-allowed" : "pointer",
          }}
        >
          {isProcessing ? "Processing..." : "Generate 3D Model"}
        </button>
      </form>

      {modelUrls && (
        <div style={{ marginTop: "2rem" }}>
          <h2>Download Links</h2>
          <ul>
            {Object.entries(modelUrls).map(([format, url]) => (
              <li key={format}>
                <a href={url as string} download>
                  {format.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;