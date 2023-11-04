export const loadStateFromLocalStorage = () => {
    try {
      const serializedState = localStorage.getItem("reduxState");
      if (serializedState === null) {
        return undefined; // If no saved state, return undefined to use the default initial state
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.error("Error loading state from local storage:", error);
      return undefined; // If error, return undefined to use the default initial state
    }
  };
  