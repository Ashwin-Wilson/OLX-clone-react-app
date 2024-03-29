import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//firebase

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import Dropdown from '../../assets/Dropdown';
import { AuthContext } from '../../store/Context';
function Header() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>navigate('/')}>
          <OlxLogo></OlxLogo>
        </div>
        {/* <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div> */}
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        {/* <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div> */}
        {/* <div className="loginPage">
          <span>{user ? user.displayName : 'Login'}</span>
          <hr />
        </div>
        {user && <span onClick={() => {
          signOut(auth).then(() => {
            navigate('/login');
          }).catch((error) => {
            alert('error while logging out');
          })
        }
        }>Logout</span>} */}

        <div onClick={() => { navigate('/create') }} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span >SELL</span>
          </div>
        </div>
      <Dropdown user={user}></Dropdown>

      </div>
    </div>
  );
}

export default Header;
