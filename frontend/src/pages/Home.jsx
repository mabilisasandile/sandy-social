
import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom';
import Stories from '../components/stories/Stories';
import Posts from "../components/posts/Posts";
import Share from "../components/share/Share";

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  );
}

export default Home;