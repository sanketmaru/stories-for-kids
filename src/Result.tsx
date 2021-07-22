import Pet from "./Pet";
import { Pet as PetType } from './APIResponseTypes';
import { FunctionComponent } from "react";
const Results: FunctionComponent<{pets: PetType[]}> = ({pets}) => {
  return (
    <div className="search">
      {!pets.length ? (<h2>No Pets Found</h2>) : (
        pets.map( pet => (
          <Pet 
            name={pet.name}
            animal={pet.animal} 
            breed={pet.breed} 
            key={pet.id} 
            images={pet.images} 
            id={pet.id}
            location={`${pet.city},  ${pet.state}`}
          />
        )))
      }
    </div>
  )
}

export default Results;