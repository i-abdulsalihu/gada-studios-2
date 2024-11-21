"use client";

import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Fragment, ReactNode } from "react";

export default function Template({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const smooth = true;

  return smooth ? (
    <ReactLenis
      root
      options={{
        lerp: 0.09, // 0.3
        infinite: false,
        syncTouch: true,
        syncTouchLerp: 0.03,
      }}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </ReactLenis>
  ) : (
    <Fragment>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </Fragment>
  );
}
