import React from "react";
import Project from "./ui/Project.jsx";
import Twitter from "../assets/Twitter.png";
import Youtube from "../assets/Youtube.png";
import Netflix from "../assets/Netflix.png";
import Ecommerce from "../assets/Ecommerce.png";
import dalle from "../assets/dalle.png";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="text__colour">projects</span>
          </h1>
          <ul className="project__list">
            <Project
              image={Twitter}
              title={"Twitter"}
              language={"HTML, CSS, React, Firebase/Firestore, Material UI"}
              para={
                "This is project: Twitter-Clone. This stacked project expanded my knowledge of backend development via firebase/firestore as the site stores and reuse data to create a collection of users. Additionally, the data base is used to record and share Tweets made by other users."
              }
              a={"Creating an API."}
              b={"Creating a Sign Up and Sign in system."}
              c={"Created a forum system with individual user details."}
            link={"https://twitter-clone-kohl-mu.vercel.app/"}
            />
            <Project
              image={Youtube}
              title={"Youtube"}
              language={"HTML, CSS, React, Material UI"}
              para={
                "This is project: Youtube-Clone. A project where the website pulls data from a Youtube API video directory based on its various categories. Recommended function includes specific channels, popular videos, gaming, sport, music etc. A search functionality was also added to match keywords with channels and video title to provide the most appropriate videos for users. "
              }
              a={
                "Using Youtube API to fetch specific Videos, Channels and Recommendation."
              }
              b={
                "Implementing the Search system to display appropriate videos and channels."
              }
              c={
                "Video could be viewed upon click as it links directly with Youtube's directory. "
              }
              link={"https://youtube-clone-chi-dun.vercel.app/"}
            />
            <Project
              image={Netflix}
              title={"Netflix"}
              language={
                "HTML, CSS, React, Material UI, Tailwind, Firebase/Firestore"
              }
              para={
                "This is project: Netflix-Clone. This project fetches data from the IMDB API which showcases the latest and most popular Movies releasing. Categories includes Up coming, popular, romance, comedy etc. Despite lacking the search function, Firestore/Firebase was used to allow users to make an account. Users could like the video and have the specific video saved on their 'Account' tab. "
              }
              a={"User Sign up and Sign in option."}
              b={
                "Save specific user information and denies access without an account."
              }
              c={"Pull data from an API and fetch the most popular Movies."}
              link={"https://netflix-clone-psi-dun.vercel.app/"}
            />
            <Project
              image={Ecommerce}
              title={"Library Store"}
              language={
                "HTML, CSS, React, FontAwesome"
              }
              para={
                "This is project: Ecommerce Library. This project is based on a custom API a book collection created by Frontend simplified. This project focused more on the design and functionality of the site. Introducing skeleton loading states, shopping cart counter, sorting system and a 'total cost' page to enhance my knowledge in creating a better user experience. "
              }
              a={"Implemented the skeleton loading state."}
              b={
                "Used the local storage method to pass saved data from pages."
              }
              c={"Used the saved data to create a 'Total Cost' page which calculated the cost using Javascript."}
              link={"https://react-commerce-library.vercel.app/"}           
           />
            <Project
              image={dalle}
              title={"Dall-E AI Image Generator"}
              language={
                "React, Node.js, Express, MongoDB, Render, Cloudinary, Tailwind"
              }
              para={
                "Created a Dall-E AI Image Generator. Using the MERN stack to develop a fullstack web application with a dedicated backend to connect all traffic to the frontend."
              }
              a={"Using Node and Express to create a backend server. Connected to OpenAI API to generate images."}
              b={
                "Passing data from the frontend to the backend using Axios."
              }
              c={"Using MongoDB to store the data and Cloudinary to store the images."}
              link={"https://dall-e-frontend-three.vercel.app/"}        
           />
          </ul>
        </div>
      </div>
    </section>
  );
}
