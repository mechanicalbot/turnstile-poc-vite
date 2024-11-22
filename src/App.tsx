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
      <div className="cf-turnstile" data-sitekey="1x00000000000000000000AA" />
    </div>
  );
}

export default App;
