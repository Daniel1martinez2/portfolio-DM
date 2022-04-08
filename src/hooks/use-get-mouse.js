import React, {useState, useEffect} from 'react';
import { fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

const useGetMouse = () => {
  const [x, setX] = useState(null)
  const [y, setY] = useState(null)

  useEffect(() => {
    // Subscribe to the mousemove event
    const sub = fromEvent(document, 'mousemove')
      // Extract out current mouse position from the event
      .pipe(map(event => [event.clientX, event.clientY]))
      // We have closure over the updater functions for our two state variables
      // Use these updaters to bridge the gap between RxJS and React
      .subscribe(([newX, newY]) => {
        setX(newX)
        setY(newY)
      })

    // When the component unmounts, remove the event listener
    return () => {
      sub.unsubscribe()
    }
    // We use [] here so that this effect fires exactly once.
    // (After the first render)
  }, [])
  return [x, y]
}

export default useGetMouse