const { createRoot } = require("react-dom/client");
const { default: App } = require("./App");

const root = createRoot(document.getElementById("root"));
root.render(<App />);
