export function setItem(key: string, value: string) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true; // Successfully set the item
  } catch (error) {
    console.error("Error setting localStorage item:", error);
    return false; // Failed to set the item
  }
}

export function getItem(key: string) {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (error) {
    console.error("Error getting localStorage item:", error);
    return null;
  }
}
