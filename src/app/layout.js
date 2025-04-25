import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sri Dharma Sastha Temple',
  description: 'Official website of Sri Dharma Sastha Temple',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <LanguageProvider>
          <Header/>
          {children}
          <Footer/>

        </LanguageProvider>
      </body>

    </html>
  );
}