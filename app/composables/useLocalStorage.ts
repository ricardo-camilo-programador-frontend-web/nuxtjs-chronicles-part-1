export function useLocalStorage() {
  const setItem = function saveItemOnLocalStorage(itemName: string, itemValue: string) {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(itemName, itemValue)
    }
  }

  const removeItem = function removeItemFromLocalStorage(itemName: string) {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(itemName)
    }
  }

  const getItem = function getItemFromLocalStorage(itemName: string) {
    if (typeof window !== 'undefined') {
      const itemValue = window.localStorage.getItem(itemName)

      return itemValue
    }
  }

  return {
    setItem,
    removeItem,
    getItem,
  }
}
