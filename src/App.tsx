import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import { HocuspocusProvider } from "@hocuspocus/provider";

const provider = new HocuspocusProvider({
  // !! Ensure the domain is the same as the one in the preview ->
  url: "ws://yc6y8h-5173.csb.app:1234",
  name: "example-document",
});

function App() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ history: false }),
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

  return (
    <div className="App">
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
      <EditorContent
        style={{ height: "500px", width: "500px" }}
        editor={editor}
      />
    </div>
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

const getRandomElement = (list) =>
  list[Math.floor(Math.random() * list.length)];

export default App;
