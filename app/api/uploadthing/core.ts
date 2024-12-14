import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const upload = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: upload({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .onUploadComplete(async({file}) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId");
      console.log("file url", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
