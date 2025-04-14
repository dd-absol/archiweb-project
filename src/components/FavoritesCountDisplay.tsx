import { useEffect, useState } from "react";

type FavoritesCountDisplayProps  = {
  id: string
}

const FavoritesCountDisplay = (props: FavoritesCountDisplayProps) => {
  const [count, setCount] = useState(0);
  const url = `https://gourmet.cours.quimerch.com/recipes/${props.id}/stars`;

  useEffect(() => {
    // opening a connection to the server to begin receiving events from it
    const eventSource = new EventSource(url);

    // attaching a handler to receive message events
    eventSource.addEventListener("count", (event) => {
      setCount(event.data);
    });
    
    // terminating the connection on component unmount
    return () => eventSource.close();
  }, []);

  return (
    <div><p>{count} users like this!</p></div>
  );
};

export default FavoritesCountDisplay;
