import React, { useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//firestore
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';
import Heart from '../../assets/Heart';
import { PostContext } from '../../store/PostContext';
import './Post.css';

const Posts = () => {
  const [products, setProducts] = useState([]);
  const { setPostDetails } = useContext(PostContext);
  const navigate = useNavigate();
  useEffect(() => {
    getDocs(collection(db, "products")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setProducts((products) => [...products, doc.data()]);
      });
    })
    // eslint-disable-next-line
  }, []);

  // console.log(products);


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
            products.map((obj) => {
              return (
                <div className="card" onClick={()=>{
                  setPostDetails(obj);
                  navigate('/view')}}>
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={obj.imageURL} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {obj.price}</p>
                    <h6>{obj.name}</h6>
                    <span className="kilometer">{obj.category}</span>
                    {/* <p className="name"> YAMAHA R15V3</p> */}
                  </div>
                  <div className="date">
                    <span>{obj.date}</span>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">

          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
