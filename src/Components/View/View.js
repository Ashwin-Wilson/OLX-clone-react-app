import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../store/PostContext';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';

import './View.css';

function View() {
  const [sellerDetails, setSellerDetails] = useState()
  const { postDetails, setPostDetails } = useContext(PostContext);
  useEffect(() => {
    // console.log(postDetails);
    getDocs(query(collection(db, "users"), where("id", "==", `${postDetails.uid}`))).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setSellerDetails(doc.data());
      });
    });
    // eslint-disable-next-line 
  }, [{ postDetails, setPostDetails }])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails ? postDetails.imageURL : ''}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.date}</span>
        </div>
        {sellerDetails && <div className="contactDetails">
          <p>{sellerDetails.username}</p>
          {/* <p>No name</p> */}
          <p>{sellerDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
