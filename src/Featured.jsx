function Featured() {
  return (
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
  );
}

export default Featured;
