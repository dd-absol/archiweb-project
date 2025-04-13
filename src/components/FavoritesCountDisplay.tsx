import React, { useEffect, useState } from "react";

const FavoritesCountDisplay = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // opening a connection to the server to begin receiving events from it
    const eventSource = new EventSource("https://gourmet.cours.quimerch.com/recipes/raclt/stars/fake");

    // attaching a handler to opening connection so that we can debug
    eventSource.onopen = () => {
      console.log("opened connection");
    }
    
    // attaching a handler to receive message events
    eventSource.addEventListener("count", (event) => {
      console.log(event.data);
      setCount(event.data);
    });
    
    // terminating the connection on component unmount
    return () => eventSource.close();
  }, []);

  return (
    <div><p>{count}</p></div>
  );
};

export default FavoritesCountDisplay;
