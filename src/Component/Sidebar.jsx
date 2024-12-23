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
        <NavLink to="/my-shelf" className={({ isActive }) => `flex gap-[10px] text-[18px] font-[400] items-center py-2 px-4 ${isActive ? 'text-orange-500 bg-gray-200' : 'text-gray-700 hover:bg-gray-200'}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookshelf" viewBox="0 0 16 16">  <path d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5M3 14h10v-3H3zm0-4h10V7H3zm0-4h10V3H3z"/></svg>My Shelf</NavLink>
        <NavLink to="/favourite" className={({ isActive }) => `flex gap-[10px] text-[18px] font-[400] items-center py-2 px-4 ${isActive ? 'text-orange-500 bg-gray-200' : 'text-gray-700 hover:bg-gray-200'}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>Favourite</NavLink>
      </nav>

    </div>
  );
};
