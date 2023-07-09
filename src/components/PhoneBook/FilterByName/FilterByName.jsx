export const Filter = ({ value, selected }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={selected} />
      </label>
    </div>
  );
};
