import React from "react"
import { v4 as uuid } from "uuid"

function ItemForm({
	name,
	newItemChange,
	newItemSelect,
	newSelectChange,
	onItemFormSubmit,
}) {
	function createNewItem(event) {
		event.preventDefault()
		const newItem = {
			id: uuid(),
			name: name,
			category: newItemSelect,
		}
		console.log(newItem)
		onItemFormSubmit(newItem)
	}

	function onNewItemChange(event) {
		newItemChange(event.target.value)
	}

	function onNewSelectChange(event){
		newSelectChange(event.target.value)
	}

	return (
		<form className="NewItem" onSubmit={createNewItem}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={name}
					onChange={onNewItemChange}
				/>
			</label>

			<label>
				Category:
				<select
					name="category"
					// select={newItemSelect}
					onChange={onNewSelectChange}
					
				>
					<option value="Produce">Produce</option>
					<option value="Dairy">Dairy</option>
					<option value="Dessert">Dessert</option>
				</select>
			</label>

			<button type="submit">Add to List</button>
		</form>
	)
}

export default ItemForm
