import axios from "axios";
import AudioReader from "../Audio/AudioReader";
import { api2 } from "../Axios/api";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import LoadingCard from "../Components/LoadingCard";
import LoadAudio from "../Components/LoadAudio";

function AudioPage() {

  const {data} = useLoaderData()
  return (

    <Suspense fallback={<LoadAudio/>}>
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
  console.log("object", request);
  const url = new URL(request.url);
  const { textUrl } = Object.fromEntries(url.searchParams);
  console.log("textUrl", textUrl);

  console.log('beforeproxy')
  const proxyUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(textUrl)}`;
  console.log('proxy after')
  console.log('proxyUrl', proxyUrl, 'response')
  try {
    const response = await axios.get(proxyUrl);

    return response;
  } catch (error) {
    throw new Response(JSON.stringify(error?.message), { status: 402 });
  }
}

export async function LoadTextData(args){
  return {data : LoaderTextData(args)}
}

export default AudioPage;
