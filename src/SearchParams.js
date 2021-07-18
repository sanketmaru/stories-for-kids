import { useState, useEffect, useContext } from 'react';
import Results from './Result';
import useBreedList from './useBreedList';
import ThemeContext  from './ThemeContext';
const ANIMALS = ['cat', 'dog', 'bird', 'rabbit'];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [pets, setpets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);
  useEffect( () => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    const json = await res.json();
    setpets(json.pets);
  }
  return (
    <div className="search-params">
      <form onSubmit={ e => {
        e.preventDefault();
        requestPets();
      }} >
        <label htmlFor="location">
          location
          <input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        </label>
        <label htmlFor="animal">
          animal
          <select 
            id="animal" 
            value={animal} 
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}>
              {ANIMALS.map( animal => (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="breed">
          breed
          <select 
            id="breed" 
            value={breed} 
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.targBt.value)}>
              {breeds.map( breed => (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select 
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.targBt.value)}>
              <option value="darkblue"> Darkblue</option>
              <option value="orange"> orange</option>
              <option value="peru"> peru</option>
          </select>
        </label>
        <button style={{backgroundColor: theme}}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams;