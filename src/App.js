import './App.css';
// Import React dependencies.
import React, { useState } from 'react';
// Import the Slate editor factory.
import { createEditor } from 'slate';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';

// function App() {
//   // Define our app...
//   const App = () => {
//     return null
//   }
//   return <div className="App">hello</div>;
// }

// Define our app...
const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
];

const App = () => {
  const [editor] = useState(() => withReact(createEditor()));
  // Render the Slate context.
  return (
    <Slate editor={editor} value={initialValue}>
      <Editable />
    </Slate>
  );
};

export default App;
