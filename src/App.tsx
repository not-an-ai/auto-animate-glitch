import React, { useState } from "react";
import "./App.css";
import uniqid from "uniqid";
import { produce } from "immer";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface IElement {
  id: string;
}

function App() {
  const [elements, setElements] = useState<IElement[]>([]);
  const [animationParent] = useAutoAnimate();

  function addElement() {
    setElements((prev) => [...prev, { id: uniqid() }]);
  }

  function deleteElement(index: number) {
    setElements((baseState: IElement[]) => {
      const nextState = produce(baseState, (draftState: IElement[]) => {
        draftState.splice(index, 1);
      });
      return nextState;
    });
  }

  return (
    <div style={{ padding: "0 24px" }}>
      <br />
      <br />
      <h1>Minimal Project to visualize an animation glitch</h1>
      <br />
      <br />
      occurs when the last element at the bottom of a page is deleted
      <br />
      <br />
      1) add elements by adding + until they move out of the screen
      <br />
      <br />
      2) scroll down
      <br />
      <br />
      3) klick the lowest element to delete it
      <br />
      <br />
      expected result: smooth animation
      <br />
      <br />
      actual result: jumping of the screen / button
      <br />
      <br />
      <small>
        the glitching does not occur if there is enough space underneath the
        deleted element (see at the end of the component)
      </small>
      <br />
      <br />
      <small>besides that edge case a really nice animation helper</small>
      <br />
      <br />
      <br />
      <br />
      <button onClick={addElement}>+</button>
      <div>
        <div ref={animationParent}>
          {elements.map(({ id }, index) => (
            <div
              key={id}
              onClick={() => deleteElement(index)}
              style={{ borderStyle: "dotted" }}
            >
              <br />
              Click me to delete me.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          ))}
        </div>
        <button onClick={addElement}>+</button>
      </div>
      {/* the glitching does not occur if there is enough space underneath the deleted element */}
      {/*<br />*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*<br />*/}
      {/*<br />*/}
    </div>
  );
}

export default App;
