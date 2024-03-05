import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/Context';
function Home(props) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user == null) {
      navigate('/signup');
    }
  })
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;

