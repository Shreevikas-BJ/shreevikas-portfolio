import path from "node:path";
import { env, pipeline } from "@huggingface/transformers";
import { env as onnxEnvironment } from "onnxruntime-node";

export const EMBEDDING_MODEL = "Xenova/all-MiniLM-L6-v2";
export const EMBEDDING_REVISION = "751bff37182d3f1213fa05d7196b954e230abad9";
export const EMBEDDING_DIMENSIONS = 384;
export const MODEL_DIRECTORY = path.join(process.cwd(), "models");

env.localModelPath = MODEL_DIRECTORY;
env.allowRemoteModels = false;
env.useFSCache = false;
onnxEnvironment.logLevel = "error";

function createEncoder() {
  return pipeline("feature-extraction", EMBEDDING_MODEL, {
    local_files_only: true,
    dtype: "q8",
    device: "cpu",
    session_options: { intraOpNumThreads: 1, interOpNumThreads: 1 }
  });
}

let encoderPromise: ReturnType<typeof createEncoder> | undefined;

export async function embedText(text: string): Promise<number[]> {
  encoderPromise ??= createEncoder().catch((error: unknown) => { encoderPromise = undefined; throw error; });
  const encoder = await encoderPromise;
  const output = await encoder(text, { pooling: "mean", normalize: true });
  return Array.from(output.data, Number);
}
