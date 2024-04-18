import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

// 마크다운 라이브러리 MDX와 설정을 결합하여 export
export default withContentlayer(nextConfig);