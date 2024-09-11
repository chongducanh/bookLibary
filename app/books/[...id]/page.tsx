import axios from 'axios';

interface BookDetail {
  title: string;
  first_publish_year: number;
  number_of_pages?: number;
  description?: { value?: string } | string;
}

async function fetchBookDetail(id: [string]): Promise<BookDetail> {
  const bookId = '/' + id.join('/');
  const response = await axios.get(`https://openlibrary.org${bookId}.json`);
  return response.data;
}

export default async function BookDetailPage({ params }: { params: { id: [string] } }) {
  const book = await fetchBookDetail(params.id);

  return (
    <div>
      <h1>{book.title}</h1>
      <p>First published: {book.first_publish_year}</p>
      <p>Number of pages: {book.number_of_pages || 'N/A'}</p>
      <p>
        Description:{' '}
        {typeof book.description === 'string'
          ? book.description
          : book.description?.value || 'No description available'}
      </p>
    </div>
  );
}
