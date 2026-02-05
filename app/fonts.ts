import localFont from "next/font/local";

export const gilroy = localFont({
  src: [
    {
      path: "/fonts/gilroy/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/gilroy/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/gilroy/Gilroy-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/gilroy/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});
