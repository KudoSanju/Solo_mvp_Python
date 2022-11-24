const SearchBar = ({ outfitss }) => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search outfits</span>
    </label>
    <input type="text" id="header-search" placeholder="search" name="s" />
    {console.log(outfitss)}
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;
