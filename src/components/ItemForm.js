import React from "react"
import { v4 as uuid } from "uuid"

function ItemForm({
	name,
	onNewItemChange,
	newItemSelect,
	onNewSelectChange,
	onItemFormSubmit,
}) {
	function createNewItem(event) {
		event.preventDefault()
		console.log(event.target[0].value)
		const newItem = {
			id: uuid(),
			name: event.target[0].value,
			category: event.target[1].value,
		}
		onItemFormSubmit(newItem)
		// console.log(newItem)
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
					select={newItemSelect}
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
