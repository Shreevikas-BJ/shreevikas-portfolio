/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["faiss-node", "@huggingface/transformers", "onnxruntime-node"],
  outputFileTracingIncludes: { "/api/chat": ["./models/**/*", "./data/generated/knowledge.json", "./node_modules/faiss-node/build/Release/*.node", "./node_modules/faiss-node/build/Release/*.so*", "./node_modules/faiss-node/build/Release/*.dll", `./node_modules/onnxruntime-node/bin/napi-v6/${process.platform}/${process.arch}/onnxruntime_binding.node`, `./node_modules/onnxruntime-node/bin/napi-v6/${process.platform}/${process.arch}/libonnxruntime.so*`, ...(process.platform === "win32" ? ["./node_modules/onnxruntime-node/bin/napi-v6/win32/x64/*.dll"] : [])] },
  outputFileTracingExcludes: { "/api/chat": ["./node_modules/onnxruntime-node/bin/**/*providers_cuda*", "./node_modules/onnxruntime-node/bin/**/*providers_tensorrt*", "./node_modules/faiss-node/build/Release/*.{lib,a}"] },
  async redirects() {
    return [{
      source: "/projects/real-time-pothole-detection",
      destination: "/projects/real-time-cctv-anomaly-detection",
      permanent: true
    }];
  },
  images: {
    qualities: [75, 80],
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
