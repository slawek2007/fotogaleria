import { useRef, useEffect } from 'react'
import './output.css';
import Photo from './Photo.jsx';

const PhotoGallery = (props) =>
{
  const search = useRef("");

  const useSearch = () => 
  {
    if (search.current.value == "")
    {
      localStorage.removeItem(-1);
    }
    else
    {
      localStorage.setItem(-1, JSON.stringify(search.current.value));
    }
    window.location.reload();
  }

  useEffect(() => 
  {
    if (localStorage.getItem(JSON.parse(-1)) != null)
    {
      document.getElementById("searchBar").value = localStorage.getItem(JSON.parse(-1)).slice(1, localStorage.getItem(JSON.parse(-1)).length - 1);
    }

    document.getElementById("searchBar").addEventListener("keydown", (e) => 
    {
      if (e.code == "Enter")
      {
        useSearch();
      }
    })
  })

  return (
    <>
      <nav class="bg-[#1d1e27] h-[50px] flex justify-center items-center" >
        <img src="./src/assets/search.png" alt="Search" class="h-[70%] mr-[10px] duration-300 hover:h-[80%] hover:cursor-pointer" onClick={() => useSearch()} />
        <input id="searchBar" ref={search} type="text" class="h-[70%] rounded-[50px] w-[25%] mr-[40px] px-[10px] text-center" placeholder="Search by title or description" />
      </nav>
      <main class="bg-[#09090c] flex flex-wrap justify-around items-center pt-[1vh] min-h-screen">
        {props.photos.map((e) => <Photo photo={e} />)}
      </main>
    </>
  )
}

export default PhotoGallery