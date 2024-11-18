import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	serverActions: {
		bodySizeLimit: "2mb", // Adjust the limit as needed
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
			{
				protocol: "https",
				hostname: "batnvkubajuuwxmrfeem.supabase.co",
			},
			{
				protocol: "https",
				hostname: "img.clerk.com",
			},
		],
	},
};

export default nextConfig;
