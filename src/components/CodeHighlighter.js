import React from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; 

const CodeHighlighter = ({ language, code }) => {
  const syntaxHighlightedCode = Prism.highlight(code, Prism.languages[language] || Prism.languages.javascript, language);

  return <pre><code dangerouslySetInnerHTML={{ __html: syntaxHighlightedCode }} /></pre>;
};

export default CodeHighlighter;
