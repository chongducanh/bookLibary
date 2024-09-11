import { ReactNode } from 'react';

export const metadata = {
  title: 'Book Library',
  description: 'A simple book library using Open Library API',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Book Library</h1>
          <nav className='grid gap-2' style={{display: 'grid'}}>
            <a href="/">Home</a>
            <a href="/books">Books</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
