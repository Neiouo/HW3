import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  // 處理按鈕點擊
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(input).toString();
        setHistory([...history, `${input} = ${result}`]); // 更新歷史紀錄
        setInput(result);
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  // 刪除單一歷史紀錄
  const handleDeleteHistory = (index) => {
    const newHistory = history.filter((_, i) => i !== index);
    setHistory(newHistory);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto', backgroundColor: '#f0f0f0' }}>
      <h1>計算機</h1>
      <input 
        type="text" 
        value={input} 
        readOnly 
        style={{ width: '95%', padding: '10px', fontSize: '24px', marginBottom: '10px' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {['7', '8', '9', '/',
          '4', '5', '6', '*',
          '1', '2', '3', '-',
          'C', '0', '=', '+'].map((item) => (
            <button 
              key={item} 
              onClick={() => handleButtonClick(item)} 
              style={{ padding: '20px', fontSize: '18px' }}
            >
              {item}
            </button>
          ))}
      </div>
      <h2 style={{ marginTop: '20px' }}>歷史紀錄</h2>
      <ul style={{ padding: '0', listStyleType: 'none' }}>
        {history.map((record, index) => (
          <li key={index} style={{ margin: '5px 0' }}>
            {record}
            <button 
              onClick={() => handleDeleteHistory(index)} 
              style={{ marginLeft: '10px', fontSize: '14px' }}
            >
              刪除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;