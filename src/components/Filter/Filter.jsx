import PropTypes from 'prop-types';
import {FilterForm, Label, Input} from './Filter.styled'

export const Filter = ({filter, onFilterChange }) => {
	return (
		<>
			<FilterForm >
				<Label>
					Find contact by name
					<Input
						type="text"
						value={filter}
						onChange={onFilterChange}
						placeholder="Search by name"
					/>
				</Label>
			</FilterForm>
		</>
	)
}

Filter.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired,

};
