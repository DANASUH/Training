import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    // نطلب من رياكت تجيب أحدث قيمة للمتغير (p) وتزيدها
    setPending(p => p + 1); 
    
    await delay(3000);
    
    // بعد 3 ثواني، نطلب أحدث قيمة للمتغير وننقصها
    setPending(p => p - 1); 
    
    // نفس الشيء هنا، نطلب أحدث قيمة للمكتمل ونزيدها
    setCompleted(c => c + 1);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Buy
      </button>
    </div>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}