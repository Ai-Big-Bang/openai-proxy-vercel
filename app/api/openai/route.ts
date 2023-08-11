import {Configuration, OpenAIApi} from "openai-edge";
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    console.log("request", payload?.messages);

    const response = await openai.createChatCompletion(payload);

    console.log("response", response.status, response.statusText);

    if (payload.stream) {
      const reader = response?.body?.getReader();
      const stream = new ReadableStream({
        start(controller) {
          function push() {
            reader
              ?.read()
              .then(({done, value}) => {
                if (done) {
                  controller.close();
                  return;
                }
                controller.enqueue(value);
                push();
              })
              .catch((error) => {
                console.error(error);
                controller.error(error);
              });
          }
          push();
        },
      });
      return new Response(stream);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {status: 200});
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify(error), {
      status: 400,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
