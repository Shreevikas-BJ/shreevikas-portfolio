/** @type {import('next').NextConfig} */
const nextConfig = {
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
