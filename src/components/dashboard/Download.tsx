"use client";

import { BiDownload } from "react-icons/bi";
import { Button } from "../ui/button";
import ApiData from "@/data/task-data.json";

import { useToast } from "@/hooks/use-toast";
export default function ButtonDownload() {
  const { toast } = useToast();
  const handleDownload = async () => {
    try {
      const response = await fetch(
        "https://testd5-img.azurewebsites.net/api/imgdownload",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ api: ApiData.api_secret }),
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response received:", data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "There was a problem with your request. Possible errors are CORS error.",
      });
      console.error("Error POST request:", error);
    }
  };

  return (
    <Button variant={"ghost"} onClick={handleDownload}>
      <BiDownload />
      Download
    </Button>
  );
}
