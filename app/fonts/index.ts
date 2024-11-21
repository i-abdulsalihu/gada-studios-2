import localFont from "next/font/local";

export const nekst = localFont({
  src: [
    {
      path: "./Nekst/Nekst-Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Nekst/Nekst-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Nekst/Nekst-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Nekst/Nekst-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Nekst/Nekst-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Nekst/Nekst-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Nekst/Nekst-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-nekst",
});
