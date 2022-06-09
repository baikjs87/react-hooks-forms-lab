import React, { useState } from "react"
import ItemForm from "./ItemForm"
import Filter from "./Filter"
import Item from "./Item"

function ShoppingList({ items, setItems }) {
	const [selectedCategory, setSelectedCategory] = useState("All")
	const [search, setSearch] = useState("")
	const [name, setName] = useState("")
	const [newItemSelect, setNewItemSelect] = useState("Produce")

	//---- Filter: Filtering item list ----//
	function handleCategoryChange(event) {
		setSelectedCategory(event.target.value)
	}

	function onSearchChange(event) {
		setSearch(event.target.value)
	}

	//---- ItemForm: Adding new items ----//
	function newItemChange(event) {
		setName(event)
	}

	function handleNewItemSelect(event) {
		setNewItemSelect(event)
	}

	function onItemFormSubmit(newItem) {
		setItems( [...items, newItem])
	}

	//---- Display item list ----//
	const itemsToDisplay = items.filter((item) => {
		// console.log(item)

		if (selectedCategory === "All") return true
		return item.category === selectedCategory
	})

	return (
		<div className="ShoppingList">
			<ItemForm
				name={name}
				newItemChange={newItemChange}
				newItemSelect={newItemSelect}
				newSelectChange={handleNewItemSelect}
				onItemFormSubmit={onItemFormSubmit}
			/>
			<Filter
				onCategoryChange={handleCategoryChange}
				onSearchChange={onSearchChange}
				search={search}
			/>
			<ul className="Items">
				{itemsToDisplay.map((item) =>
					item.name.includes(search) ? (
						<Item
							key={item.id}
							name={item.name}
							category={item.category}
						/>
					) : (
						true
					)
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
