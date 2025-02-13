import PropTypes from 'prop-types';
import { useState } from 'react';

const Header = ({ onSearch }) => {
  const [textSearch, setTextSearch] = useState("")

  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700">PAUL MOVIE</h1>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-white capitalize">
            home
          </a>
          <a href="#" className="text-white capitalize">
            about
          </a>
          <a href="#" className="text-white capitalize">
            contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="p-4 text-black bg-white"
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch}
        />
        <button onClick={() => onSearch(textSearch)} className="p-2 text-white bg-red-600">Search</button>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
}

export default Header;
