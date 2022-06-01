import React, { useState } from "react"
import ItemForm from "./ItemForm"
import Filter from "./Filter"
import Item from "./Item"

function ShoppingList({ items }) {
	const [selectedCategory, setSelectedCategory] = useState("All")
	const [search, setSearch] = useState("Cookies")
	const [formCategory, setFormCategory] = useState("Dairy")
	const [addItem, setAddItem] = useState("Apple")

	function handleCategoryChange(event) {
		setSelectedCategory(event.target.value)
	}

	function onSearchChange(event) {
		setSearch(event.target.value)
	}

	const itemsToDisplay = items.filter((item) => {
		if (selectedCategory === "All") return true
		return item.category === selectedCategory
	})

  function addElement(element){
    itemsToDisplay = [...items, element]
    
  }

	function onFormCategoryChange(event) {
		setFormCategory(event.target.value)
	}

	function onNameChange(event) {
		setAddItem(event.target.value)
	}

	return (
		<div className="ShoppingList">
			<ItemForm
				onSubmit={addElement}
				onFormCategoryChange={onFormCategoryChange}
				itemName={addItem}
				onNameChange={onNameChange}
			/>
			<Filter
				onCategoryChange={handleCategoryChange}
				onSearchChange={onSearchChange}
				search={search}
			/>
			<ul className="Items">
				{itemsToDisplay.map((item) =>
					item.name === search ? (
						<Item
							key={item.id}
							name={item.name}
							category={item.category}
						/>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
