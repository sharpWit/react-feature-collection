import { FC } from "react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchItem: FC<Props> = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        role="searchbox"
        id="search"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};
export default SearchItem;
