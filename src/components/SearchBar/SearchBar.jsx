const SearchBar = () => {
  return (
    <header>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">🔍</button>
      </form>
    </header>
  );
};

export default SearchBar;
