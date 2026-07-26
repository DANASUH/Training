import './TagButtonStyle.css'; // استدعاء الستايل حق الأزرار

export default function SideMenu() {
  return (
    <div style={{ 
      border: '4px solid teal', 
      padding: '20px', 
      textAlign: 'center', 
      backgroundColor: 'white' 
    }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* كررنا الزر عشان يعطينا نفس الشكل اللي بالصورة */}
        <button className="tagButton">Tag Button</button>
        <button className="tagButton">Tag Button</button>
        <button className="tagButton">Tag Button</button>
        <button className="tagButton">Tag Button</button>
        <button className="tagButton">Tag Button</button>
        <button className="tagButton">Tag Button</button>
        <button className="tagButton">Tag Button</button>
        <button className="tagButton">Tag Button</button>
        <button className="tagButton">Tag Button</button>
        <button className="tagButton">Tag Button</button>
        <button className="tagButton">Tag Button</button>
      </div>
    </div>
  );
}