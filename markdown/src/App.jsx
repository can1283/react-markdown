import Markdown from 'react-markdown'
import React, { useState } from 'react';
import './App.css'

function App() {

  const [inputText, setInputText] = useState('');
  const [markdownText, setMarkdownText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setMarkdownText(e.target.value);
  };

  return (
    <div className="App">
      <div className="text-editor">
        <textarea
          placeholder="add text"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <div className="markdown-preview">
        <Markdown className={"markdown"}>{markdownText}</Markdown>
      </div>
    </div>
  )
}

export default App
