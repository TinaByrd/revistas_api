import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carros API",
  description: "Projeto de CRUD de carros usando MockAPI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="flex gap-6 p-4 border-b">
          <a href="/carros">Listar Carros</a>
          <a href="/carros/new">Cadastrar Carro</a>
        </nav>

        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
