import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Input } from 'components/ContactsForm/ContactsForm.styled';
export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label>
      Find contacts by name
      <Input onChange={onChange} type="text" name="number" />
    </label>
  );
};
