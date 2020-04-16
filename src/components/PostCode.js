import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PostCode = ({language, children}) => (
  <SyntaxHighlighter
    style={darcula}
    language={language}>
    {children}
  </SyntaxHighlighter>
);
export default PostCode
