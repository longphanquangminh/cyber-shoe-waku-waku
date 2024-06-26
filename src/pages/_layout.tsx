import "../styles.css";

import type { ReactNode } from "react";

import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div className="font-['Nunito']">
      <meta property='description' content={data.description} />
      <link rel='icon' type='image/png' href={data.icon} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

const getData = async () => {
  const data = {
    description: "LP CyberShoe",
    icon: "https://longphanquangminh.github.io/Long-Phan-Resume/images/logoML.png",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "static",
  };
};
