import './globals.css';
import Navbar from './component/Navbar';

export const metadata = {
  title: 'Space Tourism',
  description: 'Space Tourism Homepage',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
