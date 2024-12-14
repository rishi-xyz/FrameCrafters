import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const MESHY_API_KEY = process.env.MESHY_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { imageUrl } = req.body;

    if (!imageUrl) {
        return res.status(400).json({ error: "Image URL is required" });
    }

    const headers = { Authorization: `Bearer ${MESHY_API_KEY}` };
    const payload = {
        image_url: imageUrl,
        enable_pbr: true,
    };

    try {
        const meshyResponse = await axios.post(
            "https://api.meshy.ai/v1/image-to-3d",
            payload,
            {headers}
        );
        console.log(meshyResponse.data)
        const taskId = meshyResponse.data.result;
        let status = "PENDING";
        let modelUrls = null;

        while (status !== "SUCCEEDED" && status !== "FAILED") {
            const taskResponse = await axios.get(
                `https://api.meshy.ai/v1/image-to-3d/${taskId}`,
                {
                    headers: { Authorization: `Bearer ${MESHY_API_KEY}` },
                }
            );

            status = taskResponse.data.status;

            if (status === "SUCCEEDED") {
                modelUrls = taskResponse.data.model_urls;
            } else if (status === "FAILED") {
                throw new Error("Meshy task failed.");
            }

            await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for 3 seconds
        }
        const videoUrl = await generateVideoPreview(modelUrls.glb);

        return res.status(200).json({
            modelUrls,
            videoUrl,
        });
    } catch (error) {
        console.error("Error processing image:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

async function generateVideoPreview(modelUrl: string): Promise<string> {
    // Mock video generation logic
    return "generate video with remotion";
}