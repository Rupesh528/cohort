import { SearchBar } from "./SearchBar";

export const AppBar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 ">
      
      {/* Left: Logo */}
      <div className="text-lg font-semibold pt-6">
        Youtube
      </div>

      {/* Center: Search Bar */}
      <div className="flex-4 mx-4">
        <SearchBar />
      </div>

      {/* Right: Sign in */}
      <div className="text-lg pt-6">
        Sign
      </div>

    </div>
  );
};
