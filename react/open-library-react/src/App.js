import { useState, useEffect } from 'react';
import Header from './Header';
import BookShelf from './BookShelf';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // State جديدة لحفظ الكتب اللي بنجيبها من النت
  const [books, setBooks] = useState([]);
  
  // State عشان نعرض رسالة "جاري التحميل" إلين توصل البيانات
  const [isLoading, setIsLoading] = useState(true);

  // useEffect تشتغل مرة وحدة أول ما يفتح الموقع
  useEffect(() => {
    // اخترت نجيب كتب البرمجة كمثال افتراضي وقت فتح الموقع
    fetch('https://openlibrary.org/subjects/programming.json?limit=12')
      .then(response => response.json())
      .then(data => {
        setBooks(data.works); // نحفظ الكتب في الـ State
        setIsLoading(false);  // نخفي رسالة التحميل
      })
      .catch(error => {
        console.error("error", error);
        setIsLoading(false);
      });
  }, []); // الأقواس الفارغة هنا مهمة جداً عشان ما يسوي جلب لا نهائي يعلق الجهاز!

  return (
    <div style={{ fontFamily: 'sans-serif', direction: 'ltr', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <main style={{ padding: '30px' }}>
        {/* إذا كان يحمل نعرض رسالة، وإذا خلص نعرض الرف */}
        {isLoading ? (
          <h3>downloading books...</h3>
        ) : (
          <BookShelf books={books} searchTerm={searchTerm} />
        )}
      </main>
    </div>
  );
}