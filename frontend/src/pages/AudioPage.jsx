import axios from "axios";
import AudioReader from "../Audio/AudioReader";
import { api2 } from "../Axios/api";

function AudioPage() {
  return (
    <div className="flex-placecenter h-screen w-screen overflow-hidden bg-black-200">
      <div className="h-full w-[25rem] bg-black-200 md:w-screen md:max-w-[70rem]">
        <AudioReader />
      </div>
    </div>
    // </div>
  );
}

export async function LoadTextData({ request }) {
  console.log("object", request);
  const url = new URL(request.url);
  const { textUrl } = Object.fromEntries(url.searchParams);
  console.log("textUrl", textUrl);

  const proxyUrl = `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(textUrl)}`;
  try {
    const response = await axios.get(proxyUrl);
    return response;
  } catch (error) {
    throw new Response(JSON.stringify(error?.message), { status: 402 });
  }
}

export default AudioPage;
