import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="w-64 bg-base-100 p-6 px-8">
      <h1 className="text-2xl font-bold mb-8">
        <img src="./src/assets/logo.png" className="w-[65%]" alt="" />
      </h1>

      <nav className="flex flex-col gap-4 pt-5">
        <NavLink to="/" className={({ isActive }) => `flex gap-[10px] text-[18px] font-[400] items-center py-2 px-4 ${isActive ? 'text-orange-500 bg-gray-200' : 'text-gray-700 hover:bg-gray-200'}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/></svg>Home</NavLink>
        <NavLink to="/search" className={({ isActive }) => `flex gap-[10px] text-[18px] font-[400] items-center py-2 px-4 ${isActive ? 'text-orange-500 bg-gray-200' : 'text-gray-700 hover:bg-gray-200'}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg>Search</NavLink>
      </nav>

    </div>
  );
};
