import { useEffect, useState } from "react"

const categories = [
  { value: "general", label: "General" },
  { value: "personal", label: "Personal" },
  { value: "work", label: "Work" },
  { value: "ideas", label: "Ideas" },
  { value: "study", label: "Study" },
]

function SearchBar({ filterNotes }) {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    filterNotes(searchInput, selectedCategory)
  }, [searchInput, selectedCategory])

  return (
    <div className="search-bar">
      <input className="search-input" type="text" placeholder="Search" onChange={(e) => setSearchInput(e.target.value)} />

      <select className="input-category" id="category-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchBar
