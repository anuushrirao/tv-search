import React, {useContext} from 'react'
import Searchbar from '../components/Searchbar'
import ShowsContext from '../context/shows/showsContext'
import ListItem from '../components/ListItem';

const HomePage = () => {
  const showsContext = useContext(ShowsContext);
  const {loading, shows} = showsContext;

  return (
    <div className='homepage'>
        <Searchbar/>
        {loading ? <h2>Loading...</h2>:
          <div className=''>
            {shows.map((item) => (<ListItem key={item.show.id} id={item.show.id} image={item.show.image ? item.show.image.medium: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ncenet.com%2Fno-image-found&psig=AOvVaw349mFaRhzGS1d3n7EhzN0r&ust=1706848828519000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLD7q8SpiYQDFQAAAAAdAAAAABAE"} name={item.show.name} rating={item.show.rating.average ? item.show.rating.average: "No rating"}/>))}
            </div>
        }
      
    </div>
  )
}

export default HomePage
