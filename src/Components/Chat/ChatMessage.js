import './Styles/ChatMessage.css';
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiCopy } from 'react-icons/fi';



// const myCustomStyle = {
//   'code[class*="language-"]': {
//     color: '#f8f8f2',
//     background: '#282a36',
//     fontFamily: '"Fira Code", monospace',
//     fontSize: '14px',
//   },
//   // add token colors like keywords, strings, etc.
//   'keyword': { color: '#ff79c6' },
//   'string': { color: '#f1fa8c' },
//   // ...and so on
// };

const CodeBlock = ({ language, value }) => {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(matchMedia.matches);
    
    const handler = e => setIsDarkMode(e.matches);
    matchMedia.addEventListener('change', handler);
    
    return () => matchMedia.removeEventListener('change', handler);
  }, []);
  
  
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div className="code-block-container">
      <button onClick={handleCopy} className="copy-btn">
        <FiCopy /> {copied ? 'Copied!' : 'Copy'}
      </button>

      {/* To customize */}
      {/* <SyntaxHighlighter language={language} style={myCustomStyle} PreTag="div">
        {value}
      </SyntaxHighlighter> */}

        <SyntaxHighlighter
        language={language}
        style={isDarkMode ? oneDark : oneLight}
        PreTag="div"
      >
        {value}
      </SyntaxHighlighter>


    </div>
  );
};

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`chat-message ${isUser ? 'user' : 'bot'}`}>
      <ReactMarkdown
        children={message.content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <CodeBlock
                language={match[1]}
                value={String(children).replace(/\n$/, '')}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default ChatMessage;
