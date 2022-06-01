import React from "react"
import { v4 as uuid } from "uuid"

function ItemForm(onFormCategoryChange, itemName, onNameChange, onSubmit) {
	function handleSubmit(event) {
		event.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: event.target[0].value,
      category: event.target[1].value,
    };
    onSubmit(newItem)
	}


	return (
		<form className="NewItem" onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={itemName}
					onChange={onNameChange}
				/>
			</label>

			<label>
				Category:
				<select name="category" onChange={onFormCategoryChange}>
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
