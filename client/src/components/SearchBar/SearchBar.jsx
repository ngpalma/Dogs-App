const SearchBar = (props) => {
  const { onSearch, name } = props;

  return (
    <div>
      <input type="search" value={name} />
      <button onClick={() => onSearch(name)}>BUSCAR</button>
    </div>
  );
};

export default SearchBar;
