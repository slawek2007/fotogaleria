import { useEffect } from 'react'
import './output.css';

const Photo = (props) =>
{
  const Love = () =>
  {
    if (localStorage.getItem(JSON.parse(props.photo.id)))
    {
      document.getElementById(props.photo.id + "love").style.borderColor = 'white';
      localStorage.removeItem(props.photo.id);
    }
    else
    {
      document.getElementById(props.photo.id + "love").style.borderColor = 'red';
      localStorage.setItem(props.photo.id, JSON.stringify(true));
    }
  }

  useEffect(() =>
  {
    if (localStorage.getItem(JSON.parse(props.photo.id)))
    {
      document.getElementById(props.photo.id + "love").style.borderColor = 'red';
    }

    if (localStorage.getItem(JSON.parse(-1)) != null && !(props.photo.title.toLowerCase().includes(localStorage.getItem(JSON.parse(-1)).toLowerCase().slice(1, localStorage.getItem(JSON.parse(-1)).length - 1)) || props.photo.description.toLowerCase().includes(localStorage.getItem(JSON.parse(-1)).toLowerCase().slice(1, localStorage.getItem(JSON.parse(-1)).length - 1))))
    {
      document.getElementById(props.photo.id + "div").style.display = 'none';
    }
  }, [])

  return (
    <div id={props.photo.id + "div"} class='bg-[#1d1e27] h-[50vh] w-[40vh] flex flex-col justify-between rounded-xl border-[#1d1e27] border-[6px] text-[white] text-center my-[1.5vh]'>
      <img class="h-[20vh] rounded-[8px]" src={props.photo.url} alt={props.photo.title} />
      <p class="text-[2.75vh] font-bold px-[2%]">{props.photo.title}</p>
      <p class="text-[1.75vh] px-[2%]">{props.photo.description}</p>
      <div class="h-[10vh] flex justify-around items-center">
        <a href={props.photo.url}>
          <button id={props.photo.id + "download"} onClick={() => document.getElementById(props.photo.id + "download").style.borderColor = '#2fcd00'} class="bg-[white] border-[white] border-4 px-[25px] py-[5px] rounded-xl">
            <img src="./src/assets/download.png" alt="download" class="h-[25px]" />
          </button>
        </a>
          <button id={props.photo.id + "love"} onClick={() => Love()} class="bg-[white] border-[white] border-4 px-[25px] py-[5px] rounded-xl">
          <img src="./src/assets/love.png" alt="love" class="h-[25px]" />
        </button>
      </div>
    </div>
  )
}

export default Photo