import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Results from './Result';
import useBreedList from './useBreedList';
import changeAnimal from './actionCreators/changeAnimal';
import changeBreed from './actionCreators/changeAnimal';
import changeLocation from './actionCreators/changeLocation';
import changeTheme from './actionCreators/changeTheme';

const ANIMALS = ['cat', 'dog', 'bird', 'rabbit'];

const SearchParams = () => {
  const animal = useSelector(state => state.animal);
  const location = useSelector(state => state.location);
  const theme = useSelector(state => state.theme);
  const breed = useSelector(state => state.breed);
  const [pets, setpets] = useState([]);
  const [breeds] = useBreedList(animal);
  const dispatch = useDispatch();

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    const json = await res.json();
    setpets(json.pets);
  }
  return (
    <div className="search-params">
      <form onSubmit={e => {
        e.preventDefault();
        requestPets();
      }} >
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            onChange={(e) => dispatch(changeLocation(e.target.value))}
            placeholder="Location" />
        </label>
        <label htmlFor="animal">
          animal
          <select
            id="animal"
            value={animal}
            onChange={e => dispatch(changeAnimal(e.target.value))}
            onBlur={e => dispatch(changeAnimal(e.target.value))}>
            {ANIMALS.map(animal => (
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
            onChange={e => dispatch(changeBreed(e.target.value))}
            onBlur={e => dispatch(changeBreed(e.targBt.value))}>
            {breeds.map(breed => (
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
            onChange={e => dispatch(changeTheme(e.target.value))}
            onBlur={e => dispatch(changeTheme(e.targBt.value))}>
            <option value="darkblue"> Darkblue</option>
            <option value="orange"> orange</option>
            <option value="peru"> peru</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams;