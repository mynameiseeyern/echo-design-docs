'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Calendar,
  X,
  Menu,
  ChevronDown,
  Home,
  Settings,
  Users,
  BarChart3,
  Bell,
  AlertCircle,
} from 'lucide-react'
import {
  ContentSection,
  ExampleBlock,
  DosDonts,
  PropsTable,
} from '@/components/doc-components'

// ============================================================================
// Button Group Component
// ============================================================================
const ButtonGroupPreview = () => {
  const [selected, setSelected] = useState('week')

  return (
    <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
      {[
        { id: 'day', label: 'Day' },
        { id: 'week', label: 'Week' },
        { id: 'month', label: 'Month' },
      ].map((btn) => (
        <button
          key={btn.id}
          onClick={() => setSelected(btn.id)}
          className={`px-4 py-2 text-sm font-medium transition-all ${
            selected === btn.id
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  )
}

// ============================================================================
// Carousel Component
// ============================================================================
const CarouselPreview = () => {
  const [current, setCurrent] = useState(0)
  const slides = [
    { id: 1, color: 'bg-blue-500', title: 'Slide 1' },
    { id: 2, color: 'bg-purple-500', title: 'Slide 2' },
    { id: 3, color: 'bg-pink-500', title: 'Slide 3' },
    { id: 4, color: 'bg-green-500', title: 'Slide 4' },
  ]

  const next = () => setCurrent((current + 1) % slides.length)
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full bg-white">
      <div className="relative h-64 w-full overflow-hidden rounded-lg">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === current ? 'opacity-100' : 'opacity-0'
            } ${slide.color} flex items-center justify-center`}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">{slide.title}</h3>
              <p className="mt-2 text-white/80">Image placeholder</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 hover:bg-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 py-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === current ? 'w-8 bg-gray-800' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// ============================================================================
// Chart Component
// ============================================================================
const ChartPreview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const data = [
    { label: 'Jan', value: 65 },
    { label: 'Feb', value: 78 },
    { label: 'Mar', value: 45 },
    { label: 'Apr', value: 92 },
    { label: 'May', value: 88 },
    { label: 'Jun', value: 73 },
  ]

  return (
    <div className="rounded-lg bg-white p-6">
      <h3 className="mb-4 font-semibold">Monthly Performance</h3>
      <div className="flex h-64 items-end gap-3">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex flex-1 flex-col items-center gap-2"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative h-full w-full">
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center">
                {hoveredIndex === i && (
                  <div className="mb-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white">
                    {item.value}
                  </div>
                )}
              </div>
              <div
                className={`w-full rounded-t bg-gradient-to-t from-blue-500 to-blue-400 transition-all ${
                  hoveredIndex === i ? 'opacity-100' : 'opacity-75'
                }`}
                style={{ height: `${(item.value / 100) * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-600">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================================
// Data Table Component
// ============================================================================
const DataTablePreview = () => {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'status'>('name')
  const [currentPage, setCurrentPage] = useState(1)

  const allData = [
    { id: 1, name: 'Alice Johnson', status: 'Active', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', status: 'Inactive', email: 'bob@example.com' },
    { id: 3, name: 'Carol White', status: 'Active', email: 'carol@example.com' },
    { id: 4, name: 'David Brown', status: 'Pending', email: 'david@example.com' },
    { id: 5, name: 'Eve Davis', status: 'Active', email: 'eve@example.com' },
  ]

  let filtered = allData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
  )

  filtered = filtered.sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    return a.status.localeCompare(b.status)
  })

  const itemsPerPage = 3
  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const paginatedData = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="w-full space-y-4 rounded-lg bg-white p-4">
      <Input
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          setCurrentPage(1)
        }}
      />

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-left text-sm font-semibold">
              <button
                onClick={() => setSortBy('name')}
                className={sortBy === 'name' ? 'text-blue-600' : 'text-gray-600'}
              >
                Name {sortBy === 'name' && '↓'}
              </button>
            </th>
            <th className="py-2 text-left text-sm font-semibold">Email</th>
            <th className="py-2 text-left text-sm font-semibold">
              <button
                onClick={() => setSortBy('status')}
                className={sortBy === 'status' ? 'text-blue-600' : 'text-gray-600'}
              >
                Status {sortBy === 'status' && '↓'}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-50">
              <td className="py-3 text-sm">{row.name}</td>
              <td className="py-3 text-sm text-gray-600">{row.email}</td>
              <td className="py-3 text-sm">
                <span
                  className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                    row.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : row.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex gap-2">
          <Button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            variant="outline"
            size="sm"
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            variant="outline"
            size="sm"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Date Picker Component
// ============================================================================
const DatePickerPreview = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2, 1))

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const days = []
  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const monthName = currentMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="inline-block rounded-lg border border-gray-200 bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={() =>
            setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
          }
          className="p-1 hover:bg-gray-100"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="font-semibold">{monthName}</span>
        <button
          onClick={() =>
            setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
          }
          className="p-1 hover:bg-gray-100"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mb-4 grid grid-cols-7 gap-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
          <div key={d} className="w-8 text-center text-xs font-semibold text-gray-500">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day, i) => (
          <button
            key={i}
            onClick={() => {
              if (day) {
                setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))
              }
            }}
            className={`w-8 rounded py-1 text-sm ${
              day === null
                ? ''
                : selectedDate?.getDate() === day &&
                    selectedDate?.getMonth() === currentMonth.getMonth()
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {selectedDate && (
        <div className="mt-4 border-t pt-4 text-center text-sm">
          <span className="font-medium">{selectedDate.toLocaleDateString()}</span>
        </div>
      )}
    </div>
  )
}

// ============================================================================
// Drawer Component
// ============================================================================
const DrawerPreview = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative h-80 w-full rounded-lg border border-gray-200 bg-gray-50">
      <div className="flex h-full items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      </div>

      {isOpen && (
        <>
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`absolute bottom-0 left-0 right-0 rounded-t-lg bg-white transition-transform duration-300 ${
              isOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{
              maxHeight: '60%',
              height: 'auto',
            }}
          >
            <div className="border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Settings</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="space-y-3 p-4">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded" />
                <span className="text-sm">Enable notifications</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded" />
                <span className="text-sm">Dark mode</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="h-4 w-4 rounded" />
                <span className="text-sm">Analytics</span>
              </label>
            </div>
            <div className="border-t border-gray-200 p-4">
              <Button className="w-full" onClick={() => setIsOpen(false)}>
                Done
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// ============================================================================
// Empty State Component
// ============================================================================
const EmptyStatePreview = () => {
  return (
    <div className="rounded-lg bg-white p-12 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        <AlertCircle className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="mb-1 text-lg font-semibold">No data available</h3>
      <p className="mb-6 text-sm text-gray-600">
        We couldn't find any items. Try adjusting your filters.
      </p>
      <Button>Create Item</Button>
    </div>
  )
}

// ============================================================================
// Field Component
// ============================================================================
const FieldPreview = () => {
  const [email, setEmail] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setHasError(value.length > 0 && !value.includes('@'))
  }

  return (
    <div className="max-w-sm space-y-6 rounded-lg bg-white p-6">
      <div>
        <Label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={handleChange}
          className={hasError ? 'border-red-500' : ''}
        />
        {hasError && (
          <p className="mt-1 text-xs text-red-600">Please enter a valid email</p>
        )}
        <p className="mt-1 text-xs text-gray-500">We'll never share your email.</p>
      </div>

      <div>
        <Label htmlFor="password" className="mb-2 block text-sm font-medium">
          Password
        </Label>
        <Input id="password" type="password" placeholder="••••••••" />
        <p className="mt-1 text-xs text-gray-500">Minimum 8 characters</p>
      </div>
    </div>
  )
}

// ============================================================================
// Input Group Component
// ============================================================================
const InputGroupPreview = () => {
  const [url, setUrl] = useState('')
  const [amount, setAmount] = useState('')

  return (
    <div className="max-w-sm space-y-6 rounded-lg bg-white p-6">
      <div>
        <Label className="mb-2 block text-sm font-medium">Website URL</Label>
        <div className="flex rounded-lg border border-gray-200">
          <span className="flex items-center bg-gray-50 px-4 text-sm text-gray-600">
            https://
          </span>
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="example.com"
            className="border-0"
          />
          <span className="flex items-center bg-gray-50 px-4 text-sm text-gray-600">
            .com
          </span>
        </div>
      </div>

      <div>
        <Label className="mb-2 block text-sm font-medium">Price</Label>
        <div className="flex rounded-lg border border-gray-200">
          <span className="flex items-center bg-gray-50 px-4 text-sm font-medium text-gray-600">
            $
          </span>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="border-0"
          />
          <span className="flex items-center bg-gray-50 px-4 text-sm text-gray-600">
            USD
          </span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Input OTP Component
// ============================================================================
const InputOTPPreview = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    const numValue = value.replace(/[^0-9]/g, '')
    const newOtp = [...otp]
    newOtp[index] = numValue.slice(-1)
    setOtp(newOtp)

    if (numValue && index < 5) {
      inputs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  return (
    <div className="rounded-lg bg-white p-6">
      <Label className="mb-6 block text-center text-sm font-medium">
        Enter verification code
      </Label>
      <div className="flex justify-center gap-2">
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={(el) => {
              inputs.current[i] = el
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className="h-12 w-12 rounded-lg border border-gray-200 text-center text-lg font-semibold focus:border-blue-600 focus:outline-none"
          />
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-gray-600">
        {otp.every((d) => d) ? 'Code verified ✓' : 'Enter the 6-digit code'}
      </p>
    </div>
  )
}

// ============================================================================
// Keyboard Shortcuts Component
// ============================================================================
const KeyboardShortcutsPreview = () => {
  const shortcuts = [
    { keys: ['Cmd', 'K'], action: 'Open search' },
    { keys: ['Cmd', 'Shift', 'P'], action: 'Command palette' },
    { keys: ['?'], action: 'Show help' },
    { keys: ['Esc'], action: 'Close dialog' },
    { keys: ['Tab'], action: 'Next field' },
    { keys: ['Shift', 'Tab'], action: 'Previous field' },
  ]

  return (
    <div className="rounded-lg bg-white p-6">
      <div className="grid grid-cols-2 gap-4">
        {shortcuts.map((shortcut, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{shortcut.action}</span>
            <div className="flex gap-1">
              {shortcut.keys.map((key, j) => (
                <React.Fragment key={j}>
                  {j > 0 && <span className="text-xs text-gray-400">+</span>}
                  <kbd className="rounded border border-gray-300 bg-gray-50 px-2 py-1 font-mono text-xs font-semibold text-gray-700">
                    {key}
                  </kbd>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================================
// Menubar Component
// ============================================================================
const MenubarPreview = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white">
      <div className="flex border-b border-gray-200">
        {['File', 'Edit', 'View', 'Help'].map((menu) => (
          <div key={menu} className="relative">
            <button
              onClick={() => setOpenMenu(openMenu === menu ? null : menu)}
              className="flex items-center gap-1 px-4 py-3 text-sm font-medium hover:bg-gray-50"
            >
              {menu}
              <ChevronDown className="h-3 w-3 opacity-50" />
            </button>
            {openMenu === menu && (
              <div className="absolute left-0 top-full min-w-48 border border-gray-200 bg-white shadow-lg">
                {menu === 'File' && (
                  <>
                    <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                      New
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                      Open
                    </button>
                    <Separator />
                    <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                      Exit
                    </button>
                  </>
                )}
                {menu === 'Edit' && (
                  <>
                    <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                      Undo
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                      Redo
                    </button>
                  </>
                )}
                {menu === 'View' && (
                  <>
                    <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                      Zoom In
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                      Zoom Out
                    </button>
                  </>
                )}
                {menu === 'Help' && (
                  <>
                    <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                      Documentation
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                      About
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="p-4 text-sm text-gray-600">Click a menu to see options</div>
    </div>
  )
}

// ============================================================================
// Navigation Menu Component
// ============================================================================
const NavigationMenuPreview = () => {
  const [expanded, setExpanded] = useState<string | null>(null)

  const menu = {
    Products: [
      { label: 'Analytics', desc: 'Track your performance' },
      { label: 'Reports', desc: 'Detailed insights' },
      { label: 'Dashboards', desc: 'Real-time data' },
    ],
    Resources: [
      { label: 'Documentation', desc: 'Learn how to use' },
      { label: 'API Reference', desc: 'Developer tools' },
      { label: 'Guides', desc: 'Step-by-step tutorials' },
    ],
  }

  return (
    <nav className="rounded-lg border border-gray-200 bg-white">
      <div className="flex">
        {Object.entries(menu).map(([name, items]) => (
          <div key={name} className="relative">
            <button
              onClick={() => setExpanded(expanded === name ? null : name)}
              className="flex items-center gap-2 border-r border-gray-100 px-6 py-4 text-sm font-medium hover:bg-gray-50"
            >
              {name}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  expanded === name ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expanded === name && (
              <div className="absolute top-full left-0 min-w-56 border border-t-0 border-gray-200 bg-white shadow-lg">
                <div className="p-4 space-y-3">
                  {items.map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      className="block rounded-lg p-3 hover:bg-gray-50"
                    >
                      <div className="font-medium text-sm">{item.label}</div>
                      <div className="text-xs text-gray-600">{item.desc}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}

// ============================================================================
// Pagination Component
// ============================================================================
const PaginationPreview = () => {
  const [current, setCurrent] = useState(3)
  const totalPages = 7

  const pages = []
  for (let i = Math.max(1, current - 2); i <= Math.min(totalPages, current + 2); i++) {
    pages.push(i)
  }

  return (
    <div className="flex items-center justify-center gap-2 rounded-lg bg-white p-6">
      <Button
        onClick={() => setCurrent(Math.max(1, current - 1))}
        disabled={current === 1}
        variant="outline"
        size="sm"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {current > 3 && (
        <>
          <button
            onClick={() => setCurrent(1)}
            className="h-8 w-8 rounded border border-gray-200 hover:bg-gray-50"
          >
            1
          </button>
          <span className="px-1 text-gray-400">...</span>
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrent(page)}
          className={`h-8 w-8 rounded ${
            current === page
              ? 'bg-blue-600 text-white'
              : 'border border-gray-200 hover:bg-gray-50'
          }`}
        >
          {page}
        </button>
      ))}

      {current < totalPages - 2 && (
        <>
          <span className="px-1 text-gray-400">...</span>
          <button
            onClick={() => setCurrent(totalPages)}
            className="h-8 w-8 rounded border border-gray-200 hover:bg-gray-50"
          >
            {totalPages}
          </button>
        </>
      )}

      <Button
        onClick={() => setCurrent(Math.min(totalPages, current + 1))}
        disabled={current === totalPages}
        variant="outline"
        size="sm"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

// ============================================================================
// Resizable Component
// ============================================================================
const ResizablePreview = () => {
  const [width, setWidth] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = () => setIsDragging(true)

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      const container = document.getElementById('resizable-container')
      if (!container) return
      const rect = container.getBoundingClientRect()
      const newWidth = ((e.clientX - rect.left) / rect.width) * 100
      setWidth(Math.max(20, Math.min(80, newWidth)))
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging])

  return (
    <div
      id="resizable-container"
      className="flex h-64 w-full overflow-hidden rounded-lg border border-gray-200 bg-white"
    >
      <div
        className="flex items-center justify-center bg-blue-50"
        style={{ width: `${width}%` }}
      >
        <div className="text-center">
          <div className="text-sm font-medium text-gray-700">Panel 1</div>
          <div className="text-xs text-gray-500">{width.toFixed(0)}%</div>
        </div>
      </div>
      <div
        onMouseDown={handleMouseDown}
        className={`w-1 cursor-col-resize bg-gray-200 transition-colors ${
          isDragging ? 'bg-blue-600' : 'hover:bg-gray-300'
        }`}
      />
      <div
        className="flex items-center justify-center bg-green-50"
        style={{ width: `${100 - width}%` }}
      >
        <div className="text-center">
          <div className="text-sm font-medium text-gray-700">Panel 2</div>
          <div className="text-xs text-gray-500">{(100 - width).toFixed(0)}%</div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Sidebar Component
// ============================================================================
const SidebarPreview = () => {
  const [isOpen, setIsOpen] = useState(true)

  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Users, label: 'Team' },
    { icon: Settings, label: 'Settings' },
  ]

  return (
    <div className="flex h-80 rounded-lg border border-gray-200 bg-white overflow-hidden">
      {/* Sidebar */}
      <div
        className={`border-r border-gray-200 bg-gray-50 transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          {isOpen && <span className="font-semibold">Menu</span>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                active
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && <span className="text-sm">{label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-gray-600">
            {isOpen ? 'Click menu to collapse' : 'Click menu to expand'}
          </p>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// Toast/Sonner Component
// ============================================================================
const ToastPreview = () => {
  const [toasts, setToasts] = useState<
    Array<{ id: number; message: string; type: 'success' | 'error' | 'info' }>
  >([])

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }

  return (
    <div className="rounded-lg bg-white p-6">
      <div className="mb-6 flex flex-wrap gap-2">
        <Button onClick={() => showToast('Success!', 'success')} variant="outline">
          Success
        </Button>
        <Button onClick={() => showToast('Error occurred', 'error')} variant="outline">
          Error
        </Button>
        <Button onClick={() => showToast('Information', 'info')} variant="outline">
          Info
        </Button>
      </div>

      <div className="space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`rounded-lg p-4 text-sm font-medium animate-in fade-in slide-in-from-right-full ${
              toast.type === 'success'
                ? 'bg-green-50 text-green-800'
                : toast.type === 'error'
                  ? 'bg-red-50 text-red-800'
                  : 'bg-blue-50 text-blue-800'
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================================================
// Spinner Component
// ============================================================================
const SpinnerPreview = () => {
  return (
    <div className="rounded-lg bg-white p-8">
      <div className="grid grid-cols-3 gap-8">
        {/* Spinning circle */}
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
          <span className="text-xs text-gray-600">Default</span>
        </div>

        {/* Dot pulse */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0.6 + i * 0.15,
                }}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">Pulse dots</span>
        </div>

        {/* Bar spinner */}
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 flex items-center justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-8 w-1 bg-blue-600 rounded"
                style={{
                  animation: `scaleY 1s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">Bar loader</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleY {
          0%,
          100% {
            opacity: 0.5;
            transform: scaleY(0.5);
          }
          50% {
            opacity: 1;
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  )
}

// ============================================================================
// Batch 4 Component Docs
// ============================================================================

const batch4: Record<
  string,
  { title: string; description: string; component: React.ReactNode }
> = {
  'button-group': {
    title: 'Button Group',
    description: 'Group related buttons together for exclusive or inclusive selections',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<ButtonGroupPreview />}
          code={`import { Button } from '@/components/ui/button'

export function ButtonGroup() {
  const [selected, setSelected] = useState('week')
  
  return (
    <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
      {['Day', 'Week', 'Month'].map((btn) => (
        <button
          key={btn}
          onClick={() => setSelected(btn)}
          className={\`px-4 py-2 text-sm font-medium transition-all \${
            selected === btn
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-50'
          }\`}
        >
          {btn}
        </button>
      ))}
    </div>
  )
}`}
        />

        <ContentSection id="button-group-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Use for mutually exclusive options" },

              { description: "Keep labels short and clear" },

              { description: "Provide visual feedback for selection" },

              { description: "Use consistent button sizes" },

            ]}
            donts={[
              { description: "Use for too many options (max 4-5)" },

              { description: "Mix button styles within a group" },

              { description: "Use without clear labels" },

              { description: "Allow multiple simultaneous selections" },

            ]}
          />
        </ContentSection>

        <ContentSection id="button-group-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              Ensure proper keyboard navigation with Tab/Shift+Tab. Use ARIA roles
              and attributes:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Use role="group" or role="tablist" for the container</li>
              <li>Set aria-pressed or aria-selected on buttons</li>
              <li>Ensure sufficient color contrast for selected state</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="button-group-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'className',
                type: 'string',
                description: 'CSS classes for styling the container',
              },
              {
                name: 'children',
                type: 'ReactNode',
                description: 'Button elements to group',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  carousel: {
    title: 'Carousel',
    description: 'Carousel for displaying content in a rotating slideshow with navigation',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<CarouselPreview />}
          code={`const [current, setCurrent] = useState(0)
const slides = [
  { id: 1, color: 'bg-blue-500', title: 'Slide 1' },
  { id: 2, color: 'bg-purple-500', title: 'Slide 2' },
  // ...
]

const next = () => setCurrent((current + 1) % slides.length)
const prev = () => setCurrent((current - 1 + slides.length) % slides.length)

return (
  <div className="relative w-full">
    <div className="relative h-64 w-full overflow-hidden rounded-lg">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={\`absolute inset-0 transition-opacity duration-500 \${
            i === current ? 'opacity-100' : 'opacity-0'
          } \${slide.color}\`}
        >
          {slide.title}
        </div>
      ))}
    </div>
    
    {/* Navigation */}
    <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2">
      &lt;
    </button>
    <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2">
      &gt;
    </button>
    
    {/* Indicators */}
    <div className="flex justify-center gap-2 py-4">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrent(i)}
          className={\`h-2 w-2 rounded-full \${
            i === current ? 'bg-gray-800' : 'bg-gray-300'
          }\`}
        />
      ))}
    </div>
  </div>
)`}
        />

        <ContentSection id="carousel-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Use for showcase/image galleries" },

              { description: "Provide multiple ways to navigate" },

              { description: "Add auto-play with user control to pause" },

              { description: "Show progress indicators" },

            ]}
            donts={[
              { description: "Auto-play without pause functionality" },

              { description: "Use for critical information only in carousel" },

              { description: "Have excessive animation/transitions" },

              { description: "Hide navigation controls" },

            ]}
          />
        </ContentSection>

        <ContentSection id="carousel-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Provide keyboard navigation (arrow keys)</li>
              <li>Add aria-live region for slide changes</li>
              <li>Use aria-label for nav buttons</li>
              <li>Pause auto-play on focus or interaction</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="carousel-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'slides',
                type: 'array',
                description: 'Array of slide objects with content',
              },
              {
                name: 'autoPlay',
                type: 'boolean',
                description: 'Enable automatic slide rotation',
              },
              {
                name: 'interval',
                type: 'number',
                description: 'Time in milliseconds between auto-play slides',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  chart: {
    title: 'Chart',
    description: 'Visual representation of data using bars, lines, and other formats',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<ChartPreview />}
          code={`const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
const data = [
  { label: 'Jan', value: 65 },
  { label: 'Feb', value: 78 },
  // ...
]

return (
  <div className="p-6">
    <h3 className="mb-4 font-semibold">Monthly Performance</h3>
    <div className="flex h-64 items-end gap-3">
      {data.map((item, i) => (
        <div
          key={i}
          className="flex flex-1 flex-col items-center gap-2"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === i && (
            <div className="rounded bg-gray-800 px-2 py-1 text-xs text-white">
              {item.value}
            </div>
          )}
          <div
            className="w-full rounded-t bg-gradient-to-t from-blue-500 to-blue-400"
            style={{ height: \`\${(item.value / 100) * 100}%\` }}
          />
          <span className="text-xs text-gray-600">{item.label}</span>
        </div>
      ))}
    </div>
  </div>
)`}
        />

        <ContentSection id="chart-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Use appropriate chart type for data" },

              { description: "Include clear labels and legends" },

              { description: "Provide tooltips on hover" },

              { description: "Use consistent color schemes" },

            ]}
            donts={[
              { description: "Overload with too many data points" },

              { description: "Use 3D effects or unnecessary animations" },

              { description: "Use similar colors for different data" },

              { description: "Omit axis labels or legends" },

            ]}
          />
        </ContentSection>

        <ContentSection id="chart-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Provide data table alongside chart</li>
              <li>Use role="img" with alt text for charts</li>
              <li>Ensure sufficient color contrast</li>
              <li>Support keyboard tooltips</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="chart-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'data',
                type: 'array',
                description: 'Array of data points to visualize',
              },
              {
                name: 'type',
                type: 'string',
                description: 'Chart type: bar, line, area, pie, etc.',
              },
              {
                name: 'interactive',
                type: 'boolean',
                description: 'Enable hover tooltips and interactions',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  'data-table': {
    title: 'Data Table',
    description: 'Sortable, filterable, and paginated table for displaying structured data',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<DataTablePreview />}
          code={`const [search, setSearch] = useState('')
const [sortBy, setSortBy] = useState<'name' | 'status'>('name')
const [currentPage, setCurrentPage] = useState(1)

const allData = [
  { id: 1, name: 'Alice Johnson', status: 'Active' },
  // ...
]

let filtered = allData.filter(item => 
  item.name.toLowerCase().includes(search.toLowerCase())
)

filtered = filtered.sort((a, b) => 
  a[sortBy].localeCompare(b[sortBy])
)

const paginatedData = filtered.slice((currentPage - 1) * 3, currentPage * 3)

return (
  <div className="space-y-4">
    <Input
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <table className="w-full">
      <thead>
        <tr>
          <th onClick={() => setSortBy('name')}>Name</th>
          <th onClick={() => setSortBy('status')}>Status</th>
        </tr>
      </thead>
      <tbody>
        {paginatedData.map(row => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)`}
        />

        <ContentSection id="data-table-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Include search/filter functionality" },

              { description: "Provide sort indicators" },

              { description: "Add pagination for large datasets" },

              { description: "Use alternating row colors" },

            ]}
            donts={[
              { description: "Display excessive data without pagination" },

              { description: "Use horizontal scroll for important columns" },

              { description: "Have unclear sort states" },

              { description: "Omit row selection for bulk actions" },

            ]}
          />
        </ContentSection>

        <ContentSection id="data-table-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Use semantic table markup (thead, tbody, th, td)</li>
              <li>Add scope attribute to headers</li>
              <li>Keyboard navigation for all controls</li>
              <li>Announce sort changes with aria-live</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="data-table-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'data',
                type: 'array',
                description: 'Array of row objects',
              },
              {
                name: 'columns',
                type: 'array',
                description: 'Column configuration with headers',
              },
              {
                name: 'sortable',
                type: 'boolean',
                description: 'Enable column sorting',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  'date-picker': {
    title: 'Date Picker',
    description: 'Calendar interface for selecting dates with navigation controls',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<DatePickerPreview />}
          code={`const [selectedDate, setSelectedDate] = useState<Date | null>(null)
const [currentMonth, setCurrentMonth] = useState(new Date())

const getDaysInMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

const getFirstDayOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
}

// Build calendar grid
const days = []
for (let i = 0; i < getFirstDayOfMonth(currentMonth); i++) {
  days.push(null)
}
for (let i = 1; i <= getDaysInMonth(currentMonth); i++) {
  days.push(i)
}

return (
  <div className="rounded-lg border border-gray-200 bg-white p-4">
    <div className="flex items-center justify-between mb-4">
      <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>
        &lt;
      </button>
      <span>{currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
      <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>
        &gt;
      </button>
    </div>
    
    <div className="grid grid-cols-7 gap-2">
      {days.map((day, i) => (
        <button
          key={i}
          onClick={() => day && setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
          className={day === null ? '' : selectedDate?.getDate() === day ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}
        >
          {day}
        </button>
      ))}
    </div>
  </div>
)`}
        />

        <ContentSection id="date-picker-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Show month/year navigation" },

              { description: "Highlight today and selected date" },

              { description: "Support keyboard navigation" },

              { description: "Include time picker if needed" },

            ]}
            donts={[
              { description: "Use dropdown-only date input" },

              { description: "Hide current month indicator" },

              { description: "Block valid dates without explanation" },

              { description: "Use 12-hour time without context" },

            ]}
          />
        </ContentSection>

        <ContentSection id="date-picker-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Support arrow keys for date navigation</li>
              <li>Use role="dialog" for picker popover</li>
              <li>Announce selected date changes</li>
              <li>Allow direct text input as alternative</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="date-picker-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'value',
                type: 'Date | null',
                description: 'Selected date value',
              },
              {
                name: 'onChange',
                type: 'function',
                description: 'Callback when date is selected',
              },
              {
                name: 'disabled',
                type: 'array',
                description: 'Array of disabled dates',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  drawer: {
    title: 'Drawer',
    description: 'Sliding panel that overlays content, typically from bottom or side',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<DrawerPreview />}
          code={`const [isOpen, setIsOpen] = useState(false)

return (
  <div className="relative h-80 bg-gray-50">
    <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
    
    {isOpen && (
      <>
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
        <div className="absolute bottom-0 left-0 right-0 rounded-t-lg bg-white">
          <div className="border-b p-4 flex justify-between">
            <h2>Settings</h2>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
          <div className="space-y-3 p-4">
            <label className="flex items-center gap-3">
              <input type="checkbox" />
              <span>Enable notifications</span>
            </label>
          </div>
        </div>
      </>
    )}
  </div>
)`}
        />

        <ContentSection id="drawer-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Use for secondary content and settings" },

              { description: "Show close button clearly" },

              { description: "Add overlay to focus attention" },

              { description: "Ensure content is readable at different sizes" },

            ]}
            donts={[
              { description: "Use for critical forms" },

              { description: "Hide the overlay without visual feedback" },

              { description: "Allow drawer to cover entire viewport" },

              { description: "Use for brief notifications" },

            ]}
          />
        </ContentSection>

        <ContentSection id="drawer-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Use role="dialog" with aria-modal</li>
              <li>Trap focus inside drawer</li>
              <li>Support Escape key to close</li>
              <li>Announce drawer opening/closing</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="drawer-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'open',
                type: 'boolean',
                description: 'Control drawer visibility',
              },
              {
                name: 'onOpenChange',
                type: 'function',
                description: 'Callback for open state changes',
              },
              {
                name: 'position',
                type: 'string',
                description: 'Drawer position: bottom, top, left, right',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  empty: {
    title: 'Empty State',
    description: 'Visual feedback when no data or content is available',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<EmptyStatePreview />}
          code={`export function EmptyState() {
  return (
    <div className="rounded-lg bg-white p-12 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        <AlertCircle className="h-8 w-8 text-gray-400" />
      </div>
      <h3 className="mb-1 text-lg font-semibold">No data available</h3>
      <p className="mb-6 text-sm text-gray-600">
        We couldn't find any items. Try adjusting your filters.
      </p>
      <Button>Create Item</Button>
    </div>
  )
}`}
        />

        <ContentSection id="empty-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Show helpful error messages" },

              { description: "Include illustration or icon" },

              { description: "Provide actionable CTA buttons" },

              { description: "Match branding with design" },

            ]}
            donts={[
              { description: "Show generic \"No data\" text" },

              { description: "Use only text without visual" },

              { description: "Make CTA buttons unclear" },

              { description: "Use jarring or irrelevant images" },

            ]}
          />
        </ContentSection>

        <ContentSection id="empty-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Use descriptive headings</li>
              <li>Provide actionable suggestions</li>
              <li>Ensure sufficient text contrast</li>
              <li>Make buttons keyboard accessible</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="empty-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'icon',
                type: 'ReactNode',
                description: 'Icon to display',
              },
              {
                name: 'title',
                type: 'string',
                description: 'Heading text',
              },
              {
                name: 'description',
                type: 'string',
                description: 'Descriptive message',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  field: {
    title: 'Field',
    description: 'Form field wrapper with label, input, error, and helper text',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<FieldPreview />}
          code={`const [email, setEmail] = useState('')
const [hasError, setHasError] = useState(false)

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value
  setEmail(value)
  setHasError(value.length > 0 && !value.includes('@'))
}

return (
  <div className="space-y-6 p-6">
    <div>
      <Label htmlFor="email" className="mb-2 block text-sm font-medium">
        Email Address
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={handleChange}
        className={hasError ? 'border-red-500' : ''}
      />
      {hasError && (
        <p className="mt-1 text-xs text-red-600">Please enter a valid email</p>
      )}
      <p className="mt-1 text-xs text-gray-500">We'll never share your email.</p>
    </div>
  </div>
)`}
        />

        <ContentSection id="field-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Include descriptive labels" },

              { description: "Show helper text for guidance" },

              { description: "Validate on blur, not keystroke" },

              { description: "Use clear error messages" },

            ]}
            donts={[
              { description: "Use placeholder as label" },

              { description: "Show errors while typing" },

              { description: "Make error messages vague" },

              { description: "Omit helper text for complex fields" },

            ]}
          />
        </ContentSection>

        <ContentSection id="field-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Associate labels with inputs using htmlFor</li>
              <li>Use aria-describedby for helper/error text</li>
              <li>Support keyboard navigation</li>
              <li>Announce validation errors</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="field-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'label',
                type: 'string',
                description: 'Field label text',
              },
              {
                name: 'error',
                type: 'string',
                description: 'Error message to display',
              },
              {
                name: 'helper',
                type: 'string',
                description: 'Helper text below input',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  'input-group': {
    title: 'Input Group',
    description: 'Input field with prefix and/or suffix elements',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<InputGroupPreview />}
          code={`const [url, setUrl] = useState('')
const [amount, setAmount] = useState('')

return (
  <div className="space-y-6 p-6">
    <div>
      <Label className="mb-2 block text-sm font-medium">Website URL</Label>
      <div className="flex rounded-lg border border-gray-200">
        <span className="flex items-center bg-gray-50 px-4 text-sm text-gray-600">
          https://
        </span>
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="example.com"
          className="border-0"
        />
        <span className="flex items-center bg-gray-50 px-4 text-sm text-gray-600">
          .com
        </span>
      </div>
    </div>
    
    <div>
      <Label className="mb-2 block text-sm font-medium">Price</Label>
      <div className="flex rounded-lg border border-gray-200">
        <span className="flex items-center bg-gray-50 px-4 text-sm font-medium text-gray-600">
          $
        </span>
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          className="border-0"
        />
        <span className="flex items-center bg-gray-50 px-4 text-sm text-gray-600">
          USD
        </span>
      </div>
    </div>
  </div>
)`}
        />

        <ContentSection id="input-group-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Use for units, currencies, or protocols" },

              { description: "Make addons visually distinct" },

              { description: "Keep addons short and clear" },

              { description: "Ensure good contrast" },

            ]}
            donts={[
              { description: "Use addon for buttons" },

              { description: "Make addon text longer than input" },

              { description: "Use for optional information" },

              { description: "Hide addon intent in color only" },

            ]}
          />
        </ContentSection>

        <ContentSection id="input-group-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Use aria-label to describe addons</li>
              <li>Ensure addon text is read by screen readers</li>
              <li>Keyboard navigation through input only</li>
              <li>Sufficient color contrast for addons</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="input-group-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'prefix',
                type: 'ReactNode',
                description: 'Element before input',
              },
              {
                name: 'suffix',
                type: 'ReactNode',
                description: 'Element after input',
              },
              {
                name: 'children',
                type: 'ReactNode',
                description: 'Input element',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  'input-otp': {
    title: 'Input OTP',
    description: 'Individual input fields for one-time password entry with auto-advance',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<InputOTPPreview />}
          code={`const [otp, setOtp] = useState(['', '', '', '', '', ''])
const inputs = useRef<(HTMLInputElement | null)[]>([])

const handleChange = (index: number, value: string) => {
  const numValue = value.replace(/[^0-9]/g, '')
  const newOtp = [...otp]
  newOtp[index] = numValue.slice(-1)
  setOtp(newOtp)

  if (numValue && index < 5) {
    inputs.current[index + 1]?.focus()
  }
}

const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
  if (e.key === 'Backspace' && !otp[index] && index > 0) {
    inputs.current[index - 1]?.focus()
  }
}

return (
  <div className="p-6">
    <Label className="mb-6 block text-center">Enter verification code</Label>
    <div className="flex justify-center gap-2">
      {otp.map((digit, i) => (
        <input
          key={i}
          ref={(el) => { inputs.current[i] = el }}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          className="h-12 w-12 rounded-lg border border-gray-200 text-center text-lg font-semibold focus:border-blue-600"
        />
      ))}
    </div>
  </div>
)`}
        />

        <ContentSection id="input-otp-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Auto-advance to next field on digit entry" },

              { description: "Allow backspace to go to previous field" },

              { description: "Support paste of full code" },

              { description: "Show clear validation feedback" },

            ]}
            donts={[
              { description: "Use masked inputs without clear intent" },

              { description: "Require manual tabbing between fields" },

              { description: "Expire codes without warning" },

              { description: "Send code via insecure channels" },

            ]}
          />
        </ContentSection>

        <ContentSection id="input-otp-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Use inputMode="numeric" for mobile keyboards</li>
              <li>Announce errors with aria-live</li>
              <li>Support keyboard-only entry</li>
              <li>Allow paste of full OTP code</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="input-otp-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'length',
                type: 'number',
                description: 'Number of OTP digits',
              },
              {
                name: 'onComplete',
                type: 'function',
                description: 'Callback when all digits are entered',
              },
              {
                name: 'type',
                type: 'string',
                description: 'Input type: numeric, alphanumeric',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  'keyboard-shortcuts': {
    title: 'Keyboard Shortcuts',
    description: 'Visual display of keyboard shortcuts and key combinations',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<KeyboardShortcutsPreview />}
          code={`const shortcuts = [
  { keys: ['Cmd', 'K'], action: 'Open search' },
  { keys: ['Cmd', 'Shift', 'P'], action: 'Command palette' },
  { keys: ['?'], action: 'Show help' },
  { keys: ['Esc'], action: 'Close dialog' },
]

return (
  <div className="p-6">
    <div className="grid grid-cols-2 gap-4">
      {shortcuts.map((shortcut, i) => (
        <div key={i} className="flex items-center justify-between">
          <span className="text-sm text-gray-600">{shortcut.action}</span>
          <div className="flex gap-1">
            {shortcut.keys.map((key, j) => (
              <React.Fragment key={j}>
                {j > 0 && <span className="text-xs text-gray-400">+</span>}
                <kbd className="rounded border border-gray-300 bg-gray-50 px-2 py-1 font-mono text-xs font-semibold text-gray-700">
                  {key}
                </kbd>
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)`}
        />

        <ContentSection id="keyboard-shortcuts-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Show shortcuts in help documentation" },

              { description: "Use standard key names (Cmd, Ctrl, Shift)" },

              { description: "Display commonly used shortcuts" },

              { description: "Provide both visual and text labels" },

            ]}
            donts={[
              { description: "Hide shortcuts without documentation" },

              { description: "Use non-standard key nomenclature" },

              { description: "Conflict with browser shortcuts" },

              { description: "Use too many shortcuts" },

            ]}
          />
        </ContentSection>

        <ContentSection id="keyboard-shortcuts-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Use semantic kbd element</li>
              <li>Provide alternative mouse actions</li>
              <li>Document all shortcuts</li>
              <li>Allow customization when possible</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="keyboard-shortcuts-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'shortcuts',
                type: 'array',
                description: 'Array of shortcut objects',
              },
              {
                name: 'searchable',
                type: 'boolean',
                description: 'Enable filtering shortcuts',
              },
              {
                name: 'theme',
                type: 'string',
                description: 'Visual style: light, dark',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  menubar: {
    title: 'Menubar',
    description: 'Horizontal application menu bar with dropdown submenus',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<MenubarPreview />}
          code={`const [openMenu, setOpenMenu] = useState<string | null>(null)

return (
  <div className="w-full border border-gray-200 bg-white">
    <div className="flex border-b border-gray-200">
      {['File', 'Edit', 'View', 'Help'].map((menu) => (
        <div key={menu} className="relative">
          <button
            onClick={() => setOpenMenu(openMenu === menu ? null : menu)}
            className="flex items-center gap-1 px-4 py-3 text-sm font-medium hover:bg-gray-50"
          >
            {menu}
            <ChevronDown className="h-3 w-3 opacity-50" />
          </button>
          {openMenu === menu && (
            <div className="absolute left-0 top-full min-w-48 border border-gray-200 bg-white shadow-lg">
              {/* Menu items */}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)`}
        />

        <ContentSection id="menubar-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Use for main application navigation" },

              { description: "Group related items in menus" },

              { description: "Show visual feedback on hover" },

              { description: "Support keyboard navigation" },

            ]}
            donts={[
              { description: "Use for too many items" },

              { description: "Hide important functions in menus" },

              { description: "Make menus hard to find" },

              { description: "Use inconsistent terminology" },

            ]}
          />
        </ContentSection>

        <ContentSection id="menubar-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Use role="menubar" and role="menu"</li>
              <li>Support arrow keys for navigation</li>
              <li>Use aria-expanded for open state</li>
              <li>Announce menu structure to screen readers</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="menubar-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'items',
                type: 'array',
                description: 'Menu items configuration',
              },
              {
                name: 'onSelect',
                type: 'function',
                description: 'Callback when item is selected',
              },
              {
                name: 'mode',
                type: 'string',
                description: 'Menu behavior: click, hover',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  'navigation-menu': {
    title: 'Navigation Menu',
    description: 'Multi-level navigation with expandable submenus and mega menu support',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<NavigationMenuPreview />}
          code={`const [expanded, setExpanded] = useState<string | null>(null)

const menu = {
  Products: [
    { label: 'Analytics', desc: 'Track your performance' },
    { label: 'Reports', desc: 'Detailed insights' },
  ],
  Resources: [
    { label: 'Documentation', desc: 'Learn how to use' },
    { label: 'API Reference', desc: 'Developer tools' },
  ],
}

return (
  <nav className="border border-gray-200 bg-white">
    <div className="flex">
      {Object.entries(menu).map(([name, items]) => (
        <div key={name} className="relative">
          <button
            onClick={() => setExpanded(expanded === name ? null : name)}
            className="flex items-center gap-2 border-r border-gray-100 px-6 py-4 text-sm font-medium hover:bg-gray-50"
          >
            {name}
            <ChevronDown className={expanded === name ? 'rotate-180' : ''} />
          </button>
          {expanded === name && (
            <div className="absolute top-full left-0 min-w-56 border border-gray-200 bg-white shadow-lg">
              <div className="p-4 space-y-3">
                {items.map((item) => (
                  <a key={item.label} href="#" className="block rounded-lg p-3 hover:bg-gray-50">
                    <div className="font-medium text-sm">{item.label}</div>
                    <div className="text-xs text-gray-600">{item.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </nav>
)`}
        />

        <ContentSection id="navigation-menu-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Organize content into logical groups" },

              { description: "Use clear, descriptive labels" },

              { description: "Show up to 2 levels of nesting" },

              { description: "Highlight current page in menu" },

            ]}
            donts={[
              { description: "Create deeply nested menus" },

              { description: "Use vague menu labels" },

              { description: "Overload mega menu with content" },

              { description: "Make navigation hard to discover" },

            ]}
          />
        </ContentSection>

        <ContentSection id="navigation-menu-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Use semantic nav element</li>
              <li>Support keyboard navigation (arrows, Enter)</li>
              <li>Use aria-current for active page</li>
              <li>Announce menu structure clearly</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="navigation-menu-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'items',
                type: 'array',
                description: 'Navigation menu items',
              },
              {
                name: 'currentPath',
                type: 'string',
                description: 'Current page path for active state',
              },
              {
                name: 'onNavigate',
                type: 'function',
                description: 'Callback on menu item click',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  pagination: {
    title: 'Pagination',
    description: 'Page navigation controls for breaking content into pages',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<PaginationPreview />}
          code={`const [current, setCurrent] = useState(3)
const totalPages = 7

const pages = []
for (let i = Math.max(1, current - 2); i <= Math.min(totalPages, current + 2); i++) {
  pages.push(i)
}

return (
  <div className="flex items-center justify-center gap-2 p-6">
    <Button
      onClick={() => setCurrent(Math.max(1, current - 1))}
      disabled={current === 1}
      variant="outline"
      size="sm"
    >
      &lt;
    </Button>

    {current > 3 && (
      <>
        <button onClick={() => setCurrent(1)} className="h-8 w-8 rounded border border-gray-200">
          1
        </button>
        <span className="px-1 text-gray-400">...</span>
      </>
    )}

    {pages.map((page) => (
      <button
        key={page}
        onClick={() => setCurrent(page)}
        className={current === page ? 'h-8 w-8 bg-blue-600 text-white rounded' : 'h-8 w-8 rounded border border-gray-200'}
      >
        {page}
      </button>
    ))}

    {current < totalPages - 2 && (
      <>
        <span className="px-1 text-gray-400">...</span>
        <button onClick={() => setCurrent(totalPages)} className="h-8 w-8 rounded border border-gray-200">
          {totalPages}
        </button>
      </>
    )}

    <Button onClick={() => setCurrent(Math.min(totalPages, current + 1))} disabled={current === totalPages} variant="outline" size="sm">
      &gt;
    </Button>
  </div>
)`}
        />

        <ContentSection id="pagination-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Show page numbers when possible" },

              { description: "Disable buttons at boundaries" },

              { description: "Show total page count" },

              { description: "Provide direct page jumps" },

            ]}
            donts={[
              { description: "Hide pagination controls" },

              { description: "Allow jumping beyond bounds" },

              { description: "Use only Next/Previous without numbers" },

              { description: "Have unclear active state" },

            ]}
          />
        </ContentSection>

        <ContentSection id="pagination-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Use aria-label for pagination container</li>
              <li>Mark current page with aria-current</li>
              <li>Keyboard navigation between pages</li>
              <li>Announce page changes</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="pagination-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'totalPages',
                type: 'number',
                description: 'Total number of pages',
              },
              {
                name: 'current',
                type: 'number',
                description: 'Currently active page',
              },
              {
                name: 'onChange',
                type: 'function',
                description: 'Callback when page changes',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  resizable: {
    title: 'Resizable',
    description: 'Draggable divider allowing users to resize adjacent panels',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<ResizablePreview />}
          code={`const [width, setWidth] = useState(50)
const [isDragging, setIsDragging] = useState(false)

const handleMouseDown = () => setIsDragging(true)

useEffect(() => {
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    const container = document.getElementById('resizable-container')
    if (!container) return
    const rect = container.getBoundingClientRect()
    const newWidth = ((e.clientX - rect.left) / rect.width) * 100
    setWidth(Math.max(20, Math.min(80, newWidth)))
  }

  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  return () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }
}, [isDragging])

return (
  <div id="resizable-container" className="flex h-64 overflow-hidden rounded-lg border border-gray-200 bg-white">
    <div className="flex items-center justify-center bg-blue-50" style={{ width: \`\${width}%\` }}>
      Panel 1 - {width.toFixed(0)}%
    </div>
    <div
      onMouseDown={handleMouseDown}
      className="w-1 cursor-col-resize bg-gray-200 hover:bg-gray-300"
    />
    <div className="flex items-center justify-center bg-green-50" style={{ width: \`\${100 - width}%\` }}>
      Panel 2 - {(100 - width).toFixed(0)}%
    </div>
  </div>
)`}
        />

        <ContentSection id="resizable-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Show visual indicator on hover" },

              { description: "Limit resize to reasonable bounds" },

              { description: "Remember user preferences" },

              { description: "Support touch for mobile" },

            ]}
            donts={[
              { description: "Allow resize to collapse panels" },

              { description: "Hide resize handle" },

              { description: "Resize too slowly" },

              { description: "Block resizing without feedback" },

            ]}
          />
        </ContentSection>

        <ContentSection id="resizable-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Use role="separator" for divider</li>
              <li>Support arrow keys for keyboard resize</li>
              <li>Use aria-label for separator</li>
              <li>Announce panel sizes when resizing</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="resizable-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'minSize',
                type: 'number',
                description: 'Minimum panel size in percentage',
              },
              {
                name: 'maxSize',
                type: 'number',
                description: 'Maximum panel size in percentage',
              },
              {
                name: 'onResize',
                type: 'function',
                description: 'Callback when resizing',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  sidebar: {
    title: 'Sidebar',
    description: 'Collapsible side navigation panel with menu items',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<SidebarPreview />}
          code={`const [isOpen, setIsOpen] = useState(true)

const menuItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Users, label: 'Team' },
  { icon: Settings, label: 'Settings' },
]

return (
  <div className="flex h-80 overflow-hidden rounded-lg border border-gray-200 bg-white">
    <div className="border-r border-gray-200 bg-gray-50 transition-all duration-300" style={{ width: isOpen ? '256px' : '64px' }}>
      <div className="flex items-center justify-between border-b border-gray-200 p-4">
        {isOpen && <span className="font-semibold">Menu</span>}
        <button onClick={() => setIsOpen(!isOpen)} className="p-1 hover:bg-gray-100 rounded">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <nav className="p-4 space-y-2">
        {menuItems.map(({ icon: Icon, label, active }) => (
          <button key={label} className={active ? 'w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-100 text-blue-700' : 'w-full flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100'}>
            <Icon className="h-5 w-5 flex-shrink-0" />
            {isOpen && <span className="text-sm">{label}</span>}
          </button>
        ))}
      </nav>
    </div>
    <div className="flex-1 p-6 flex items-center justify-center">
      <p className="text-sm text-gray-600">{isOpen ? 'Click menu to collapse' : 'Click menu to expand'}</p>
    </div>
  </div>
)`}
        />

        <ContentSection id="sidebar-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Show collapse/expand toggle" },

              { description: "Use icons with labels when expanded" },

              { description: "Highlight active page" },

              { description: "Group related items" },

            ]}
            donts={[
              { description: "Hide toggle button" },

              { description: "Use only icons without labels" },

              { description: "Allow sidebar to overlap main content" },

              { description: "Make navigation unclear" },

            ]}
          />
        </ContentSection>

        <ContentSection id="sidebar-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Use semantic nav element</li>
              <li>Use aria-expanded for collapse button</li>
              <li>Mark active page with aria-current</li>
              <li>Support keyboard navigation</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="sidebar-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'items',
                type: 'array',
                description: 'Sidebar menu items',
              },
              {
                name: 'collapsible',
                type: 'boolean',
                description: 'Allow sidebar collapse',
              },
              {
                name: 'defaultOpen',
                type: 'boolean',
                description: 'Sidebar open by default',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  sonner: {
    title: 'Toast Notifications (Sonner)',
    description: 'Dismissible toast notifications that appear at screen edges',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<ToastPreview />}
          code={`const [toasts, setToasts] = useState<Array<{ id: number; message: string; type: 'success' | 'error' | 'info' }>>([])

const showToast = (message: string, type: 'success' | 'error' | 'info') => {
  const id = Date.now()
  setToasts((prev) => [...prev, { id, message, type }])
  setTimeout(() => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, 3000)
}

return (
  <div className="p-6">
    <div className="mb-6 flex flex-wrap gap-2">
      <Button onClick={() => showToast('Success!', 'success')} variant="outline">
        Success
      </Button>
      <Button onClick={() => showToast('Error occurred', 'error')} variant="outline">
        Error
      </Button>
      <Button onClick={() => showToast('Information', 'info')} variant="outline">
        Info
      </Button>
    </div>

    <div className="space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={\`rounded-lg p-4 text-sm font-medium animate-in \${
            toast.type === 'success' ? 'bg-green-50 text-green-800' :
            toast.type === 'error' ? 'bg-red-50 text-red-800' :
            { description: "bg-blue-50 text-blue-800" }

          }\`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  </div>
)`}
        />

        <ContentSection id="sonner-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Use for confirmation messages" },

              { description: "Auto-dismiss after short duration" },

              { description: "Stack multiple toasts clearly" },

              { description: "Use appropriate colors for types" },

            ]}
            donts={[
              { description: "Use for critical errors without action" },

              { description: "Keep toast on screen indefinitely" },

              { description: "Overuse toast notifications" },

              { description: "Use confusing or mismatched icons" },

            ]}
          />
        </ContentSection>

        <ContentSection id="sonner-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Use role="status" or role="alert"</li>
              <li>Use aria-live="polite" for updates</li>
              <li>Announce toast content to screen readers</li>
              <li>Make dismiss button keyboard accessible</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="sonner-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'message',
                type: 'string',
                description: 'Toast notification text',
              },
              {
                name: 'type',
                type: 'string',
                description: 'Toast type: success, error, info, warning',
              },
              {
                name: 'duration',
                type: 'number',
                description: 'Auto-dismiss duration in milliseconds',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },

  spinner: {
    title: 'Spinner',
    description: 'Loading indicators and spinners with various animation styles',
    component: (
      <div className="space-y-8">
        <ExampleBlock
          preview={<SpinnerPreview />}
          code={`export function Spinner() {
  return (
    <div className="rounded-lg bg-white p-8">
      <div className="grid grid-cols-3 gap-8">
        {/* Default spinner */}
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" />
          <span className="text-xs text-gray-600">Default</span>
        </div>

        {/* Pulse dots */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"
                style={{
                  animationDelay: \`\${i * 0.15}s\`,
                }}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">Pulse dots</span>
        </div>

        {/* Bar spinner */}
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 flex items-center justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-8 w-1 bg-blue-600 rounded"
                style={{
                  animation: 'scaleY 1s ease-in-out infinite',
                  animationDelay: \`\${i * 0.1}s\`,
                }}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">Bar loader</span>
        </div>
      </div>
    </div>
  )
}`}
        />

        <ContentSection id="spinner-usage" title="Usage">
          <DosDonts
            dos={[
              { description: "Use during async operations" },

              { description: "Show loading state clearly" },

              { description: "Provide skeleton screens when possible" },

              { description: "Indicate expected load time if long" },

            ]}
            donts={[
              { description: "Spin indefinitely without feedback" },

              { description: "Use spinners for quick operations" },

              { description: "Animate too fast or too slow" },

              { description: "Make spinner hard to see" },

            ]}
          />
        </ContentSection>

        <ContentSection id="spinner-accessibility" title="Accessibility">
          <div className="space-y-3 text-sm text-gray-700">
            <ul className="list-inside list-disc space-y-2">
              <li>Use aria-busy="true" on loading element</li>
              <li>Announce loading state with aria-live</li>
              <li>Provide loading text or status</li>
              <li>Include expected duration when available</li>
            </ul>
          </div>
        </ContentSection>

        <ContentSection id="spinner-props" title="Props">
          <PropsTable
            props={[
              {
                name: 'size',
                type: 'string',
                description: 'Spinner size: sm, md, lg',
              },
              {
                name: 'color',
                type: 'string',
                description: 'Spinner color or color class',
              },
              {
                name: 'speed',
                type: 'string',
                description: 'Animation speed: slow, normal, fast',
              },
            ]}
          />
        </ContentSection>
      </div>
    ),
  },
}

export default batch4
