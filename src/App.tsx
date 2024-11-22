import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("async", "true");
    script.setAttribute("defer", "true");
    script.setAttribute(
      "src",
      "https://challenges.cloudflare.com/turnstile/v0/api.js"
    );
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div style={{ height: "500px", width: "500px" }}>
      <div className="cf-turnstile" data-sitekey="0x4AAAAAAA0kQKG3itMFh1EV" />
    </div>
  );
}

export default App;
