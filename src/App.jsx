import { useEffect, useState } from "react";
import "./App.css";
import CarouselComponent from "./components/CarouselComponent";
import Form from "./components/Form";
import Scroll from "./components/Scroll";
import Loader from "./components/Loader";

function App() {
  // const images = [
  //   "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
  //   "https://st4.depositphotos.com/4678277/24722/i/600/depositphotos_247223056-stock-photo-full-length-body-size-photo.jpg",
  //   "https://media.istockphoto.com/id/1098337010/photo/close-up-side-profile-full-length-body-size-photo-of-attractive.jpg?s=612x612&w=0&k=20&c=Gc66KHNbGhAC7cgA1n0Oq6688Drl0-lK6Izv1YrXt88=",
  //   "https://st4.depositphotos.com/4678277/28246/i/600/depositphotos_282464066-stock-photo-full-body-side-photo-of.jpg",
  //   "https://t4.ftcdn.net/jpg/03/16/57/79/360_F_316577937_Hq0p8QA6rSd3wMIvsZWc805zfeIelmJs.jpg",
  // ];
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const getPosts = async () => {
    let data = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=18&_page=${page}`
    );
    data = await data.json();
    setPosts((prev) => [...prev, ...data]);
    setLoading(false);
  };
  useEffect(() => {
    getPosts();
  }, [page]);

  const handleScroll = () => {
    if (
      document.documentElement.scrollTop + window.innerHeight + 100 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
      setLoading(true);
    }
  };
  console.log(page);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="center">
        {/* <div className="containerslides">
          <CarouselComponent images={images} />
        </div>
         */}

        <Scroll posts={posts} />
        {loading && <Loader />}
      </div>
    </>
  );
}

export default App;
