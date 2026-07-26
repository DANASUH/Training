import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh', paddingBottom: '50px' }}>
      
      {/* 1. الشريط العلوي اللي صلحناه */}
      <Header />
      
      {/* 2. حاوية تجمع البوستات والقائمة الجانبية جنب بعض */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '30px', 
        padding: '0 20px' 
      }}>
        
        {/* قسم البوستات (يأخذ 60% من المساحة) */}
        <div style={{ width: '60%', marginRight: '20px' }}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        {/* قسم القائمة الجانبية (يأخذ 30% من المساحة) */}
        <div style={{ width: '30%' }}>
          <SideMenu />
        </div>

      </div>
    </div>
  );
}