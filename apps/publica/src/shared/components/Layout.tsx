import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const [theme, setTheme] = useState('auto')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme) //eslint-disable-line
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className={`app ${theme}-mode`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
    </div>
  )
}
