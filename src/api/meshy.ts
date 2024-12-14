import axios from "axios";

const MESHY_API_KEY = process.env.MESHY_API_KEY;

export const Uploadimage = async ({ imageUrl }: { imageUrl: string }) => {
    const headers = { Authorization: `Bearer ${MESHY_API_KEY}` };
    const payload = {
        image_url: imageUrl,
        enable_pbr: true,
    };

    try {
        const meshyResponse = await axios.post(
            "https://api.meshy.ai/v1/image-to-3d",
            payload,
            { headers }
        )
        const taskId = meshyResponse.data.result;
        console.log("taskid:"+taskId)
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
        console.log("urls for 3d are :",modelUrls)
        return modelUrls;
    } catch (error) {
        console.error("Error collecting the taskid from meshy")
    }
}