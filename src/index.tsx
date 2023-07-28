import { createRoot } from "react-dom/client";
import { HangmanRoot } from "./HangmanRoot";

const rootNode = document.getElementById("app");

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(rootNode!);
root.render(<HangmanRoot />);
