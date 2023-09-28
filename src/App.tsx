import {EditorContent, useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import {HocuspocusProvider} from "@hocuspocus/provider";
import {ENABLE_REACT_STRICT_MODE} from "./main";
import {useEffect, useState} from "react";
import * as Y from 'yjs'

const EditorContainer = () => {
  console.log('container rerendeer')

  const [provider, setProvider] = useState(null);

  useEffect(() => {
    console.log('useeffect rerender')
    const doc = new Y.Doc();

    const provider = new HocuspocusProvider({
      url: "ws://localhost:8080",
      name: "example-document",
      token: 'notkne'
    });

    setProvider(provider);

    return () => {
      provider.destroy();
      setProvider(null);
    };
  }, []);

  if (!provider) {
    return null; // or show a loading indicator here
  }

  return <Editor provider={provider}/>;
};

const Editor = ({provider}) => {
  console.log('editor rerendeer')
  const editor = useEditor({
    extensions: [
      StarterKit.configure({history: false}),
      // ... your extensions here
      Collaboration.configure({
        document: provider.document,
      }),
      CollaborationCursor.configure({
        provider,
        user: {
          name: getRandomElement(names),
          color: getRandomElement(colors),
        },
      }),
    ],
  });

  return <EditorContent editor={editor}/>;
};


function App() {
  return (
    <div className="App">
      <Description/>
      <h3>Editor:</h3>
      <EditorContainer/>
    </div>
  );
}

function Description() {
  return (
    <>
      <p>
        To get set up and demonstrate the issue:
        <ol>
          <li>Ensure React Strict Mode is enabled in main.tsx.</li>
          <li>
            Ensure the domain in the URL for HocuspocusProvider in App.tsx
            matches the domain in the preview pane.
          </li>
          <li>
            Open a second additional preview pane by clicking "Split panel"
            above the preview pane.
          </li>
          <li>
            Begin typing in one of the editors, you will see in the other pane
            that the user cursor label flickers repeatedly. The WebSocket will
            be firing hundreds of changes a seconds.
          </li>
          <li>
            Disable React Strict Mode in main.tsx and repeat, you will see the
            issue ceases to occur.
          </li>
        </ol>
      </p>
      <p>
        Strict Mode is{" "}
        <strong>{ENABLE_REACT_STRICT_MODE ? "ON" : "OFF"}</strong>
      </p>
    </>
  );
}

const colors = [
  "#958DF1",
  "#F98181",
  "#FBBC88",
  "#FAF594",
  "#70CFF8",
  "#94FADB",
  "#B9F18D",
];
const names = [
  "Lea Thompson",
  "Cyndi Lauper",
  "Tom Cruise",
  "Madonna",
  "Jerry Hall",
  "Joan Collins",
  "Winona Ryder",
  "Christina Applegate",
  "Alyssa Milano",
  "Molly Ringwald",
  "Ally Sheedy",
  "Debbie Harry",
  "Olivia Newton-John",
  "Elton John",
  "Michael J. Fox",
  "Axl Rose",
  "Emilio Estevez",
  "Ralph Macchio",
  "Rob Lowe",
  "Jennifer Grey",
  "Mickey Rourke",
  "John Cusack",
  "Matthew Broderick",
  "Justine Bateman",
  "Lisa Bonet",
];

const getRandomElement = (list) => {
  console.log('get random element')
  return list[Math.floor(Math.random() * list.length)];
}

export default App;
