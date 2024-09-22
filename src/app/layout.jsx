import "./globals.css";
import { EcommerceProvider } from "@/context/EcommerceContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Ecommerce App",
  description:
    "Ecommerce App developed by alok as part of coding round at Incresco.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <EcommerceProvider>
          <Header />
          <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[8vw]">
            {children}
          </div>
          <Footer />
        </EcommerceProvider>
      </body>
    </html>
  );
}
