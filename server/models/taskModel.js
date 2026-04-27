export const createTask = (text) => {
  return {
    id: Date.now(),
    text,
    completed: false
  };
};