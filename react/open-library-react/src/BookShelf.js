import BookCard from './BookCard';

export default function BookShelf({ books, searchTerm }) {
  // هنا نفلتر الكتب: نمر عليها واحد واحد ونشوف إذا العنوان يحتوي على الكلمة اللي كتبتيها
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
      {filteredBooks.length > 0 ? (
        // إذا لقينا كتب، نعرضها باستخدام مكون BookCard
        filteredBooks.map(book => (
          <BookCard key={book.key} book={book} />
        ))
      ) : (
        <p style={{ color: '#888' }}>No books found matching your search.</p>
      )}
    </div>
  );
}