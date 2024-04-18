import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";

// Custom mdx components, ex) img, a, title
export const customMDXComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="relative mt-3 border-t-2 border-rose-200/5 pt-9 text-xl font-medium text-rose-100/90 sm:text-3xl">
      {children}
    </h1>
  ),
  img: (props) => <Image sizes="100vw" {...(props as ImageProps)} />,
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};
