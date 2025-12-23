function saveItemOnLocalStorage(itemName: string, itemValue: string) {
  if (typeof globalThis.window !== 'undefined') {
    globalThis.window.localStorage.setItem(itemName, itemValue)
  }
}

function removeItemFromLocalStorage(itemName: string) {
  if (typeof globalThis.window !== 'undefined') {
    globalThis.window.localStorage.removeItem(itemName)
  }
}

function getItemFromLocalStorage(itemName: string) {
  if (typeof globalThis.window !== 'undefined') {
    const itemValue = globalThis.window.localStorage.getItem(itemName)

    return itemValue
  }
}

export function useLocalStorage() {
  return {
    setItem: saveItemOnLocalStorage,
    removeItem: removeItemFromLocalStorage,
    getItem: getItemFromLocalStorage,
  }
}
