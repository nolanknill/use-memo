import { useState, useEffect, useMemo } from "react";

function App() {
  // Define max mobile width
  // Only create the mediaQuery object on mount. Memoize it so it doesn't run on every render
  const mediaQuery = useMemo(() => window.matchMedia("(max-width: 767px)"), []);
  
  // is the current size mobile or not (767px)
  const [isMobile, setIsMobile] = useState(mediaQuery.matches);
  
  // change handler changes isMobile state. Triggered when the window "match" changes 
  const changeHandler = (event) => { setIsMobile(event.matches) };

  useEffect(() => {
    console.log("Added: Event listener for window change");
    
    // Triggered only when width changes threshold (max-width:767px)
    mediaQuery.addEventListener("change", changeHandler);

    return () => {
      // Cleanup the event listener when this component unmounts
      console.log("Removed: Event listener for window change");
      mediaQuery.removeEventListener("change", changeHandler);
    }
  }, 
  [mediaQuery]
  );

  console.log("Rendering");

  return (
    <>
      <h1>{isMobile ? "true" : "false"}</h1>
    </>
  )
}

export default App;