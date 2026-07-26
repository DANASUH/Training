export default function Post() {
  return (
    <div style={{ 
      border: '4px solid teal', 
      padding: '20px', 
      marginBottom: '20px', 
      textAlign: 'center', 
      backgroundColor: 'white' 
    }}>
      <h2 style={{ marginTop: '0' }}>This is the post Title</h2>
      <hr style={{ borderColor: '#ddd', borderWidth: '1px', borderStyle: 'solid' }} />
      <p style={{ marginBottom: '0' }}>This is the post body</p>
    </div>
  );
}