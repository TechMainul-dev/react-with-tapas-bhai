import PropTypes from 'prop-types';
function Search({ searchTerm, onSearchTerm }) {
  return (
    <input
      type="search"
      placeholder="Search cars..."
      value={searchTerm}
      onChange={(e) => onSearchTerm(e.target.value)}
      className="border border-slate-300 rounded-md  px-2 py-1"
    />
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchTerm: PropTypes.func.isRequired,
};

export default Search;
