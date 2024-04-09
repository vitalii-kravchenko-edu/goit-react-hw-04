import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.searchQuery.value.trim();

    if (!searchQuery) {
      toast.error("Please enter a search query");
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" aria-label="Search">
          🔍
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
