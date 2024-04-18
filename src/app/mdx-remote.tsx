import type { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React from "react";

// Custom mdx components, ex) img, a, title
const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="relative mt-3 border-t-2 border-rose-200/5 pt-9 text-xl font-medium text-rose-100/90 sm:text-3xl">
      {children}
    </h1>
  ),
  img: (props) => <Image sizes="100vw" {...(props as ImageProps)} />,
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
