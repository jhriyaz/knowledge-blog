import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Blog from "./blog/Blog";
import SideBar from "./sideBar/SideBar";
import {
  setOnLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from "./utilities/Utilities";
import Footer from "./footer/Footer";

function App() {
  let [data, setData] = useState([]);

  let Bookmarks = getFromLocalStorage("bookmarks");
  let Time = getFromLocalStorage("time");
  let [time, setTime] = useState(Time);
  let [bookmarks, setBookmarks] = useState(Bookmarks);
  let [button, setButton] = useState([
    { isTrue: false },
    { isTrue: false },
    { isTrue: false },
    { isTrue: false },
  ]);

  useEffect(() => {
    let loadData = async () => {
      const fetchJson = await fetch("blog.json");
      const fetchData = await fetchJson.json();
      setData(fetchData);
    };
    loadData();
  }, []);
  let handleTimeAndBookmark = (Data, id = "") => {
    let newData = parseInt(Data);
    if (typeof newData === "number" && !isNaN(newData)) {
      let newTime = Time + newData;
      setOnLocalStorage(newTime, "time");

      let arr = [];
      button.map((value, index) =>
        index === id ? arr.push({ isTrue: true }) : arr.push(value)
      );
      setButton(arr);
      console.log(arr);
      return setTime(newTime);
    }
    if (bookmarks.find((d) => d === Data)) {
      removeFromLocalStorage(Data, "bookmarks");
      return setBookmarks(getFromLocalStorage("bookmarks"));
    } else {
      setOnLocalStorage(Data, "bookmarks");
      return setBookmarks([...bookmarks, Data]);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <main className="container mx-auto grid grid-cols-4 pt-12 gap-0 lg:gap-12">
        <div className="lg:col-span-3 col-span-4 bg-[#4d4c4c13] p-5 rounded-lg">
          {data.map((blogPost) => (
            <Blog
              key={blogPost.id}
              handleTimeAndBookmark={handleTimeAndBookmark}
              blogPost={{ ...blogPost }}
              isRead={button[blogPost.id - 1].isTrue}
            ></Blog>
          ))}
        </div>
        <aside className="lg:col-span-1 col-span-4 m-5 lg:m-0 ">
          <SideBar time={time ? time : 0} bookmark={bookmarks}></SideBar>
        </aside>
      </main>
      <footer className=" bg-[#0000ff28] py-7 mt-12">
            <Footer>

            </Footer>
      </footer>
    </>
  );
}

export default App;
