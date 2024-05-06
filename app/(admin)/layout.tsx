import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import StyledComponentsRegistry from '../styled.component.registry'
import { Providers } from '../StoreProvider'
import Sidebar from '@/components/navigation/sidebar'
import Navbar from '@/components/navigation/navbar'
import 'remixicon/fonts/remixicon.css'
import Container from './container'
import ContentContainer from './content.container'

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
    <>
      <Sidebar />
      <Container>
        <Navbar />
        {children}
      </Container>

    </>
  );
}
