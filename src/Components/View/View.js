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
    <div className="container">
    
      <div className="viewParentDiv row ">
      <h1 className='col-md-12 col-12 m-3'>{postDetails ?  postDetails.name : 'hello'}</h1>
        <div className="imageShowDiv col-12 col-md-8">
          <img
            src={postDetails ? postDetails.imageURL : ''}
            alt=""
          />
        </div>

        <div className="rightSection col-12 col-md-4">
          <div className="productDetails p-3">
            <p>&#x20B9; {postDetails.price} </p>
            <span>{postDetails.name}</span>
            <p>{postDetails.category}</p>
            <span>{postDetails.date}</span>
          </div>
          {sellerDetails && <div>
            <div className="contactDetails p-3">
              <p>{sellerDetails.username}</p>
              {/* <p>No name</p> */}
              <p>{sellerDetails.phone}</p>
            </div>
            <div className="mt-3">
             <button className='btn btn-primary'> Message</button>
            </div>
          </div>
          }

        </div>

      </div>
    </div>
  );
}
export default View;
