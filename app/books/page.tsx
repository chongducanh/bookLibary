import axios from 'axios';
import Link from 'next/link';

interface Book {
  key: string;
  title: string;
  author_name: string[];
}

async function fetchBooks(): Promise<Book[]> {
  const response = await axios.get('https://openlibrary.org/search.json?q=harry+potter');
  return response.data.docs;
}

export default async function BooksPage() {
  const books = await fetchBooks();

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.slice(0, 10).map((book: Book) => (
          <li key={book.key}>
            <Link href={`/books${book.key}`}>
              {book.title} by {book.author_name?.join(', ')}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
