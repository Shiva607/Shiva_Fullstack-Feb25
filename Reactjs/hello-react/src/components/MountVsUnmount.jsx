import { useEffect } from "react";

function MountVsUnmount({ setStatus }) {
  useEffect(() => {
    //! Mount	=> When a React component is inserted into the DOM for the first time.
    setStatus("Mounted");

    return () => {
      //! Unmount	=> When a React component is removed from the DOM.
      //! cleanup code (unmounting)
      setStatus("Unmounted");
    };
  }, [setStatus]);

  return (
    <div>
      <h2>I am the Child Component</h2>
    </div>
  );
}

export default MountVsUnmount;
