import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import StyledComponentsRegistry from '../styled.component.registry'

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kurnia Kasih Motor Dealer",
  description: "Dealer resmi honda di indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
