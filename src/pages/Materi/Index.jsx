import React from "react";
import Content from "./components/Content";
import gotchaImage from "/src/images/gotcha.png";
import fireImage from "/src/images/fire.png";
import ironImage from "/src/images/iron.png";
import platinaImage from "/src/images/platina.png";
import rainbowImage from "/src/images/rainbow.png";
import "/src/App.css";

const Index = () => {
  return (
    <>
      <button className="kembali-appli">
        <a href="/home">Back</a>
      </button>
      <h1 className="appli-title">Materi</h1>
      <div className="container-materi">
        <Content
          title="SteamHopper"
          paragraph="SteamHopper adalah bentuk utama berbasis belalang dan lokomotif uap Gotchard yang diakses dengan menggunakan Hopper1 dan Steamliner Ride Chemy Cards di Gotchadriver.
Steamhopper adalah bentuk seimbang Gotchard, memberinya kemampuan melompat dan mobilitas yang hebat."
          source={gotchaImage}
        />
        <Content
          title="Fire SteamHopper"
          paragraph="Upgrade  Form Dari Gotchard SteamHopper. Form ini Diakses menggunakan GotcharIgniter dengan memadukan Dua Chemy Yaitu HopperOne dan SteamLiner. Form ini meningkatkan Kemampuan untuk melompat Tinggi dan Rider Kick Yang mematikan secara Extreme. Kekurangannya Bisa Overheat."
          source={fireImage}
        />
        <Content
          title="Iron Gotchard"
          paragraph="Form Yang didapat Houtarou ketika SteamLiner menjadi Chemy Tingkat Ten TenLiner. berkat teknik Alkimia Terlarang. Houtarou Dapat Berubah Menjadi iron Gotchard Hanya Menggunakan Tenliner. Form Memiliki Durabilitas Yang sangat Kokoh dan serangan Mematikan Yang Dashyat. Namun Bila Digunakan Kelamaan Gotchard menjadi Lemah."
          source={ironImage}
        />
        <Content
          title="Platina Gotchard"
          paragraph="Dengan HopperOne Menjadi Chemy Tingkat Ten Juga, CrossHopper Houtarou Dapat Menjadi Form Sesunguhnya Dari Iron Gotchard Yaitu Platina Gotchard. Form Ini memberi Houtarou Kemampuan untuk menggunakan Kekuatan Dari Chemy lainnya Hingga Empat Chemmy Sekaligus."
          source={platinaImage}
        />
        <Content
          title="Rainbow Gotchard"
          paragraph="Form Terkuat Gotchard yang memadukan seluruh Chemy. Form Diakses Dengan Menggunakan Nijigon ,Chemy Yang Berada Didalam Tubuhnya Houtarou. Form ini adalah Puncak Dari Alkemis, memiliki Kemampuan Tak Terbatas."
          source={rainbowImage}
        />
      </div>
      <button><a href='/quiz' className="btn-quiz">Quiz</a></button>
    </>
  );
};

export default Index;
