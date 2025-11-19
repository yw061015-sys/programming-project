'use client'

import { useState, useEffect } from 'react'
import { storage } from '@/lib/storage'
import type { HistoryItem } from '@/lib/types'

export function useHistory() {
  const [history, setHistory] = useState<HistoryItem[]>([])

  useEffect(() => {
    const savedHistory = storage.loadData<HistoryItem[]>('history') || []
    setHistory(savedHistory)
  }, [])

  const addHistoryItem = (item: Omit<HistoryItem, 'id' | 'date'>) => {
    const newItem: HistoryItem = {
      ...item,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    }

    storage.updateData<HistoryItem[]>('history', (current) => {
      const updated = [newItem, ...(current || [])]
      // Keep only the last 50 items
      return updated.slice(0, 50)
    })

    setHistory((prev) => [newItem, ...prev].slice(0, 50))
  }

  const getRecentHistory = (limit: number = 10) => {
    return history.slice(0, limit)
  }

  const getHistoryByType = (type: HistoryItem['type']) => {
    return history.filter((item) => item.type === type)
  }

  const clearHistory = () => {
    storage.removeData('history')
    setHistory([])
  }

  return {
    history,
    addHistoryItem,
    getRecentHistory,
    getHistoryByType,
    clearHistory,
  }
}
