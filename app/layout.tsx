"use client"; // Required to use React hooks like useEffect

import './globals.css';
import Link from 'next/link';
import { useEffect } from 'react';



export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <title>Astha - Portfolio</title>
      </head>
      <body>
        <header className="fixed-header">
          <h1 className="brand-name">Astha</h1>
          <nav>
            <ul>
              <li><Link href="#aboutme">About</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#resume">Resume</Link></li>
              <li><Link href="#skills">Skills</Link></li>
            </ul>
          </nav>
        </header>

        

        {/* Additional Sections */}
        {children}

        {/* Footer */}
        <footer>
          <p>© 2024 Mohd Shahid Iqbal. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
