import { useState, useEffect } from "react";
import Header from "./Header";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(true);

  useEffect(() => {
    setLoadingBooks(true);
    fetch("https://openlibrary.org/search.json?q=fiction&limit=12")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs);
        setLoadingBooks(false);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const ScrollArea = ({ children, className }) => (
    <div className={`overflow-x-auto ${className}`}>{children}</div>
  );
  
  const ScrollBar = () => null;

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="p-8 bg-gray-100 h-full">
      
        {
          loadingBooks 
          ? (
            <div className="flex justify-center items-center my-5">
              <svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a11" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#F55B56"></stop><stop offset=".3" stop-color="#F55B56" stop-opacity=".9"></stop><stop offset=".6" stop-color="#F55B56" stop-opacity=".6"></stop><stop offset=".8" stop-color="#F55B56" stop-opacity=".3"></stop><stop offset="1" stop-color="#F55B56" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a11)" stroke-width="15" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#F55B56" stroke-width="15" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>
            </div>
          ) : (
            <>
              <div className="lg:grid grid-cols-2 gap-4 items-center">
                <div className="flex-1 w-full h-full p-6 text-white rounded-[10px] shadow-lg" style={{background: "linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(141deg, #EB5231 -29.15%, #571FCF 151.64%)", }}>
                  <p className="text-[26px] font-[500] py-2 italic">Today's Quote</p>
                  <p className="text-[23px] font-[400] italic">
                    “There is more treasure in books than in all the pirate's loot on
                    Treasure Island.”
                  </p>
                  <div className="text-right text-[18px] mt-4">- Walt Disney</div>
                </div>
                <section className=" flex flex-col lg:flex-row border rounded-[16px]">
                  <ScrollArea className="w-full whitespace-nowrap rounded-[16px]">
                    <div className="flex w-max space-x-4 p-2">
                      {
                        books.map((book) => (
                          <div key={book.key} className="bg-base-100 rounded-lg shadow-xl text-center">
                            <figure className="w-[130px] h-[150px] overflow-hidden rounded-t-lg">
                              <img className="h-full w-full" src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "" }/>
                            </figure>
                            <div className="p-4">
                              <h3 className="text-sm p-1">{book.title}</h3>
                              <p className="text-xs">{book.author_name}</p>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    <ScrollBar orientation="horizontal"/>
                  </ScrollArea>
                </section>
              </div>

              <h2 className="text-2xl italic font-[500] pt-8 pb-2">Recommended Books</h2>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full">
                {
                  books.map((book) => (
                    <div key={book.key} className="bg-base-100 rounded-lg shadow-xl text-center">
                      <figure className="h-[200px] w-full overflow-hidden rounded-t-lg">
                        <img className="h-full w-full" src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "" }/>
                      </figure>
                      <div className="p-4">
                        <h3 className="text-sm p-1">{book.title}</h3>
                        <p className="text-xs">{book.author_name}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </>
          )
        }
      </div>
    </>
  );
};

