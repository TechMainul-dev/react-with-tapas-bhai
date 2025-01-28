function Search() {
  return (
    <div className="">
      <input
        type="search"
        className="border border-slate-300 rounded-md  px-2 py-1"
        placeholder="Search cars..."
      />

      <label
        htmlFor="showPremium"
        className="content-center cursor-pointer ms-2 "
      >
        <input
          id="showPremium"
          type="checkbox"
          className="me-1 cursor-pointer"
          placeholder="Search cars..."
        />
        <span>Show Premium Only</span>
      </label>
    </div>
  );
}

export default Search;
