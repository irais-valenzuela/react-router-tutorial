import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const BreedImages = () => {
  const { state } = useLocation();
  const [images, setImages] = useState([]);

  const breed = state ? state.type : null;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axios.get(
          `https://dog.ceo/api/breed/${breed}/images`
        );
        setImages(data.message);
      } catch (error) {
        console.error("Uh oh, something went wrong :(", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div>
      <h1 className="centered-text">{breed ? `Images for ${breed}` : ""}</h1>
      <div className="center-content">
        {breed ? (
          images.length &&
          images.map((url, idx) => {
            return <img key={idx} src={url && url} alt="dog" />;
          })
        ) : (
          <h2 className="red-error-color">
            No images, please go back and select a dog
          </h2>
        )}
      </div>
    </div>
  );
};

export default BreedImages;

// About this code:

// The `BreedImages` component utilizes React's `useState` and `useEffect` hooks to fetch and display images of a specific dog breed. It
// imports the necessary dependencies, including `useState` and `useEffect` from React, `useLocation` from `react-router-dom`, and `axios`
//  for making HTTP requests.

// Inside the component, it uses `useLocation` to access the state passed from the previous page. The `images` state is managed using
//  `useState` to store the fetched images.

// The `breed` variable is derived from the `state` object, with a fallback value of `null` if `state.type` is not provided.

// Within the `useEffect` hook, an asynchronous function named `fetchImages` is defined. It makes a GET request to the Dog API using
//  `axios`, with the `breed` variable interpolated into the URL. Upon receiving the response, the images are extracted from `data.message`
//   and stored in the `images` state using `setImages`.

// In the render function, the component displays a heading element (`<h1>`) with the text "Images for {breed}" to indicate the selected
// breed. The fetched images are then rendered using `images.map` to iterate over the `images` array and display each image as an `<img>`
// element.

// The component is exported as the default export, making it available for use in other files.
