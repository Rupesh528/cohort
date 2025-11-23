// Very simple YouTube-like search bar
export const SearchBar = () => {
  return (
    <div className="flex justify-center mt-5">
      <div className="flex w-full max-w-md">
        
        {/* Search input */}
        <input
          type="text"
          placeholder="Search"
          className="flex-grow border border-gray-400 rounded-l-full px-4 py-2 focus:outline-none"
        />

        {/* Search button */}
        <button className="bg-gray-200 border border-gray-400 rounded-r-full px-4">
          🔍
        </button>

      </div>
    </div>
  );
};
