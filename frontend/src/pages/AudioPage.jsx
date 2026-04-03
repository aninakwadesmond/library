import axios from "axios";
import AudioReader from "../Audio/AudioReader";
import { api2, server } from "../Axios/api";
import { Await, redirect, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import LoadingCard from "../Components/LoadingCard";
import LoadAudio from "../Components/LoadAudio";
import { toast } from "react-toastify";

function AudioPage() {
  const { data } = useLoaderData();
  console.log("data", data);
  return (
    <Suspense fallback={<LoadAudio />}>
      <div className="flex-placecenter h-screen w-screen overflow-hidden bg-black-200">
        <div className="h-full w-[25rem] bg-black-200 md:w-screen md:max-w-[70rem]">
          <AudioReader data={data} />
        </div>
      </div>
    </Suspense>
    // </div>
  );
}

async function LoaderTextData({ request }) {
  const url = new URL(request.url);
  const { textUrl } = Object.fromEntries(url.searchParams);
  console.log("textUrl", textUrl);

  // const proxyUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(textUrl)}`;
  // console.log("proxy after");
  // console.log("proxyUrl", proxyUrl, "response");
  try {
    const response = await server.get(`/books/audiotext?url=${textUrl}`);
    toast.success("🎵🎧 audio time");

    // if (!response.ok) {
    //   throw new Response("Proxy failed", { status: response.status });
    // }

    return response;
  } catch (error) {
    toast.error("Failed to fetch audio");
    return;

    // throw new Response(JSON.stringify(error?.message), { status: 402 });
  }
}

export async function LoadTextData(args) {
  return { data: LoaderTextData(args) };
}

export default AudioPage;
