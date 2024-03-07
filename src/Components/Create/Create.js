import React, { Fragment, useState, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { storage } from '../../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { AuthContext } from '../../store/Context';
import { db } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";

const Create = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const date = new Date()
  const handleCreate = (e) => {
    e.preventDefault();
    setDisabled(true);
    // console.log(user.uid);

    const storageRef = ref(storage, `images/${image.name}`);
    uploadBytes(storageRef, image).then((snapshot) => {
      // console.log('Uploaded a file!');
      getDownloadURL(storageRef).then((url) => {
        // console.log(url)
        const product = {
          uid: user.uid,
          name,
          category,
          price,
          imageURL: url,
          date: date.toDateString()
        }
        addDoc(collection(db, "products"), product).then(() => {
          navigate('/');
          // console.log(product);
        })
      });
    });

  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form onSubmit={handleCreate}>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              onChange={(e) => setName(e.target.value)}
              className="input"
              type="text"
              id="fname"
              name="Name"
              required="required"

            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              onChange={(e) => setCategory(e.target.value)}
              className="input"
              type="text"
              id="fname"
              name="category"
              required="required"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input onChange={(e) => setPrice(e.target.value)}
              className="input" type="number" id="fname" name="Price" required="required" />
            <br />
            <br />
            <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''} ></img>
            <br />
            <input onChange={(e) => {
              setImage(e.target.files[0]);
              // console.log(e.target.files[0]);
            }} type="file" name='imageField' required />
            <br />
            <button className="uploadBtn" type='submit' disabled={disabled} >upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};
export default Create;
