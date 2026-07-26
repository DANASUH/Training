export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <header style={{ 
      padding: '20px', 
      backgroundColor: '#f8f9fa', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      borderBottom: '2px solid #ddd'
    }}>
      <h2 style={{ margin: 0, color: '#333' }}>Open Library</h2>
      
      <input
        type="text"
        placeholder="search for books ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ 
          padding: '10px', 
          width: '300px', 
          borderRadius: '5px', 
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />
    </header>
  );
}