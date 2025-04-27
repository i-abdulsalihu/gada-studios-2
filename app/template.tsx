"use client";

import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";
import NextTopLoader from "nextjs-toploader";
import type { LenisRef } from "lenis/react";

import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        <NextTopLoader color="var(--primary-500)" showSpinner={false} />
        <Toaster richColors theme="light" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </ReactLenis>
    </>
  );
}
