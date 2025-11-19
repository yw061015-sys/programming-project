'use client'

import { useState, useEffect } from 'react'
import { storage } from '@/lib/storage'
import type { User } from '@/lib/types'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const currentUser = storage.loadData<User>('currentUser')
    setUser(currentUser)
    setIsLoading(false)
  }, [])

  const login = (email: string, password: string): boolean => {
    const users = storage.loadData<User[]>('users') || []
    const user = users.find(u => u.email === email)
    
    if (user) {
      const passwords = storage.loadData<Record<string, string>>('passwords') || {}
      if (passwords[user.id] === password) {
        storage.saveData('currentUser', user)
        setUser(user)
        return true
      }
    }
    return false
  }

  const signup = (email: string, username: string, password: string): boolean => {
    const users = storage.loadData<User[]>('users') || []
    
    if (users.some(u => u.email === email)) {
      return false // Email already exists
    }

    const newUser: User = {
      id: Date.now().toString(),
      email,
      username,
      createdAt: new Date().toISOString(),
    }

    storage.saveData('users', [...users, newUser])
    
    const passwords = storage.loadData<Record<string, string>>('passwords') || {}
    passwords[newUser.id] = password
    storage.saveData('passwords', passwords)
    
    storage.saveData('currentUser', newUser)
    setUser(newUser)
    return true
  }

  const logout = () => {
    storage.removeData('currentUser')
    setUser(null)
  }

  return { user, isLoading, login, signup, logout }
}
