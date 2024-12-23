import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

export const Search = () => {
  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(true);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    setLoadingBooks(true);
    fetch(`https://openlibrary.org/search.json?q=${query}&limit=6`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs);
        setLoadingBooks(false);
      });
  }, [query]);

  return (
    <div className="bg-gray-100 h-full">
      <Header />
      <div className="p-8 bg-gray-100 h-full">
        {loadingBooks ? (
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a11" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#F55B56"></stop><stop offset=".3" stop-color="#F55B56" stop-opacity=".9"></stop><stop offset=".6" stop-color="#F55B56" stop-opacity=".6"></stop><stop offset=".8" stop-color="#F55B56" stop-opacity=".3"></stop><stop offset="1" stop-color="#F55B56" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a11)" stroke-width="15" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#F55B56" stroke-width="15" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>
            </div>
          </div>
        ) : (
          <div className="w-full bg-white rounded-lg shadow-md">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Ratings</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Availability</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.key} className="border-t hover:bg-gray-100">
                    <td className="px-4 py-2 flex items-center w-1/2">
                      <img src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : '' } alt="Cover" className="w-12 h-16 mr-4 object-cover"/>
                      <div>
                        <p className="font-semibold text-sm">{book.title}</p>
                        <p className="text-xs text-gray-500">
                          {book.author_name}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-2">4.5/5</td>
                    <td className="px-4 py-2">Computer Science</td>
                    <td className="px-4 py-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Hard Copy</span>
                    </td>
                    <td className="px-4 py-2 w-[100px]">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">In-Shelf</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
