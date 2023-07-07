import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllBreeds = () => {
  const [breedArray, setBreedArray] = useState([]);

  useEffect(() => {
    const fetchAllDogs = async () => {
      try {
        const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
        let dataArray = Object.keys(data.message);
        setBreedArray(dataArray);
      } catch (error) {
        console.error("Uh oh, something went wrong :(", error);
      }
    };
    fetchAllDogs();
  }, []);

  return (
    <div>
      <h1 className="centered-text">All Dog Breeds</h1>
      <div className="center-content">
        {breedArray &&
          breedArray.map((breed, idx) => {
            return (
              <Link
                key={idx}
                to="/breedImages"
                state={{ type: breed }}
                className="link-tags"
              >
                {breed}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default AllBreeds;
