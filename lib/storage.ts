// LocalStorage Manager - Client-side only
export const storage = {
  saveData<T>(key: string, value: T): void {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.error('[v0] Storage save error:', error)
      }
    }
  },

  loadData<T>(key: string): T | null {
    if (typeof window !== 'undefined') {
      try {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : null
      } catch (error) {
        console.error('[v0] Storage load error:', error)
        return null
      }
    }
    return null
  },

  updateData<T>(key: string, updater: (current: T | null) => T): void {
    const current = this.loadData<T>(key)
    const updated = updater(current)
    this.saveData(key, updated)
  },

  removeData(key: string): void {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(key)
      } catch (error) {
        console.error('[v0] Storage remove error:', error)
      }
    }
  },
}
