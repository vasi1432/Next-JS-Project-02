const Header = () => {
  return (
    <div className="flex items-center justify-between border-b-2 p-4">
      <div>
        <span className=" items-center justify-center text-xs font-medium bg-gray-900 rounded-full py-2 ">
          <span className=" text-white p-3 ">V</span>
        </span>
        <span className="ml-2">vasi</span>
      </div>
      <svg
        className="w-5 h-5 text-gray-900 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
      </svg>
    </div>
  );
};
export default Header;
