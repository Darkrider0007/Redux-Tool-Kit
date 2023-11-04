export const saveStateToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("reduxState", serializedState);
    } catch (error) {
      console.error("Error saving state to local storage:", error);
    }
  };
  