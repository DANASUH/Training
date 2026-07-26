export default function BookCard({ book }) {
  // موقع Open Library يستخدم هذا الرابط لعرض الصور بناءً على رقم الغلاف (cover_id)
  const coverUrl = book.cover_id
    ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
    : 'https://via.placeholder.com/150x200?text=No+Cover';

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px',
      width: '160px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <img 
        src={coverUrl} 
        alt={book.title} 
        style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '4px' }} 
      />
      <h4 style={{ fontSize: '14px', margin: '10px 0 5px' }}>{book.title}</h4>
      <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>
        {book.authors ? book.authors[0].name : 'Unknown Author'}
      </p>
    </div>
  );
}