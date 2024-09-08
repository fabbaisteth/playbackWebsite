import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Playback network enabling large action models",
  description: "Playback networks gives ChatGPT hands",
};


export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    < html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body>{children}</body>
    </html >
  );
}
