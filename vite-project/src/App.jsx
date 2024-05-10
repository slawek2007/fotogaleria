import { useEffect, useState } from 'react';
import axios from 'axios';
import './output.css';
import PhotoGallery from './PhotoGallery.jsx';

const App = () => 
{
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://api.slingacademy.com/v1/sample-data/photos?limit=15').then((res) => {
      setPhotos(res.data.photos);
    })
  }, []);

  return (
    <PhotoGallery photos={photos} />
  )
}

export default App