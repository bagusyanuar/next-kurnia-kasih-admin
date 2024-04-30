import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import StyledComponentsRegistry from '../styled.component.registry'
import { Providers } from '../StoreProvider'
import Sidebar from '@/components/navigation/sidebar'
import 'remixicon/fonts/remixicon.css'

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
    <Providers>
      <html lang="en">
        <head>
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        </head>
        <body className={raleway.className}>
          <StyledComponentsRegistry>
            <Sidebar />
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </Providers>
  );
}
