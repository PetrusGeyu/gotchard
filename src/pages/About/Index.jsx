import React, {useState} from 'react'
import '/src/App.css'
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";
const Index = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const showPopup = (message) => {
    setPopupMessage(message);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <div className='container-about'>
      <button className='kembali'><a href='/'>Back</a></button>
      <div className='about-title'>About</div>
      <div className='about-content'>
        <div className='about-image '>
        </div>
        <div className='about-text'>
          <div className='about-name'>
            <h1>My name is Petrus</h1>
          </div>
          <div className='about-description'>
            <p>Halo, nama saya Petrus. Saya siswa SMK jurusan Rekayasa Perangkat Lunak (RPL) dengan minat besar dalam programming. Selain programming, saya suka membaca dan selalu antusias belajar hal-hal baru. Dengan kegemaran saya pada teknologi dan keinginan untuk terus berkembang, saya yakin dapat menghadapi berbagai tantangan dan terus maju baik secara profesional maupun pribadi.</p>
          </div>
          <div className='social-media'>
            <a href='https://www.facebook.com/'><IoLogoFacebook size={55} color='white'/></a>
            <a href='https://www.facebook.com/'><IoLogoInstagram size={55} color='white'/></a>
            <a href='https://www.facebook.com/'><IoLogoTiktok size={55} color='white'/></a>
          </div>
          <button className='btn-count' onClick={() => showPopup("Potensi Manusia Tidak ada Batas")}>Count On Me</button>
        </div>
      </div>
     
      <div className='about-content'>
        <div className='about-image img-1'>
        </div>
        <div className='about-text'>
          <div className='about-name'>
            <h1>My name is Tesalonika</h1>
          </div>
          <div className='about-description'>
            <p>Halo, nama saya Tesalonika. Saya siswa SMK jurusan Rekayasa Perangkat Lunak (RPL) dengan minat besar dalam programming. Selain programming, saya suka membaca dan selalu antusias belajar hal-hal baru. Dengan kegemaran saya pada teknologi dan keinginan untuk terus berkembang, saya yakin dapat menghadapi berbagai tantangan dan terus maju baik secara profesional maupun pribadi.</p>
          </div>
          <div className='social-media'>
            <a href='https://www.facebook.com/'><IoLogoFacebook size={55} color='white'/></a>
            <a href='https://www.facebook.com/'><IoLogoInstagram size={55} color='white'/></a>
            <a href='https://www.facebook.com/'><IoLogoTiktok size={55} color='white'/></a>
          </div>
          <button className='btn-count' onClick={() => showPopup("Dengan kedua Tangan Ini kita Bisa Mengubah Dunia")}>Count On Me</button>
        </div>
      </div>
      {isPopupVisible && <Popup message={popupMessage} closePopup={closePopup} />}
    </div>
  )
}

const Popup = ({ message, closePopup }) => {
  return (
    <div className='popup'>
      <div className='popup-inner'>
        <h1>{message}</h1>
        <button onClick={closePopup} className='close-btn'>Close</button>
      </div>
    </div>
  );
};


export default Index