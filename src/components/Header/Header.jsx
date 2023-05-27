import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {FiSearch} from 'react-icons/fi';
import {GrLanguage} from 'react-icons/gr';
import logo from '../../assets/images/logo.png';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={`h-20 flex ${styles.header}`}>
      <div className="header-logo-box">
            <img src={logo} alt="" className='h-20'/>
      </div>

      <div className="categories text-flex-center mr-8 ml-4">
            <p >Categories</p>
      </div>

      <div className={`${styles.headerSearchInput} text-flex-center ml-2 mr-4`}>
            < FiSearch className='text-flex-center'/>
            <input type="text" placeholder='Tìm kiếm'/>
      </div>

      <div className="udemy-business text-flex-center mr-2 ml-2">
            <p >Udemy business</p>
      </div>

      <div className="teach-on-udemy text-flex-center mr-2 ml-2">
            <p >Teach on udemy</p>
      </div>

      <div className="account text-flex-center">
            <div className={`text-flex-center text-2xl mr-2`}>
                  < AiOutlineShoppingCart />
            </div>
            <div className={`${styles.login} text-flex-center`} >
                  <Link>Login</Link>
            </div>
            <div className={`${styles.login} ${styles.signup} text-flex-center`}>
                  <Link>Singup</Link>
            </div>
            <div className={`${styles.languages} ${styles.login} text-flex-center`}>
                  < GrLanguage className='text-2xl'/>
            </div>
      </div>
    </header>
  )
}

export default Header