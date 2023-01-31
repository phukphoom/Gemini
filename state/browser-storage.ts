const PERSISTED_KEYS = "funnels";
export function loadState() {
  try {
    const serializedState = localStorage.getItem(PERSISTED_KEYS);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(PERSISTED_KEYS, serializedState);
  } catch (e) {
    // Ignore
  }
}
