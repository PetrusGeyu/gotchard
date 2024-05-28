import React, { useState } from 'react';
import '/src/App.css';
import HotaroImage from '/src/images/hotaro.jpg';
import GotchaImage from '/src/images/bn.jpg';

const Index = () => {
  const [isTransformed, setIsTransformed] = useState(false); // State untuk menyimpan status transformasi

  // Fungsi untuk mengubah status transformasi dan teks tombol
  const handleTransformClick = () => {
    setIsTransformed(!isTransformed); // Mengubah status transformasi
  };

  // Variabel untuk menyimpan gambar dan teks berdasarkan status transformasi
  const imageSource = isTransformed ? HotaroImage : GotchaImage;

  const buttonText = isTransformed ? 'Revert' : 'Transform';

  const whatText = isTransformed
  ? '"Chemies: monster ajaib yang diciptakan melalui Alkimia. Saat segel pada kartu Chemy rusak, nasib ada di pundak seorang pemuda!"'
  : 'Kamen Rider Gotchard (仮面ライダーガッチャード, Kamen Raidā Gatchādo ) adalah drama Tokusatsu Jepangdalam Seri Kamen Rider Toei Company. Ini adalah seri kelima yang debut di Era Reiwa dan seri ketiga puluh delapan secara keseluruhan. Serial ini ditayangkan perdana pada 3 September 2023,';

const whoText = isTransformed
  ? 'Protagonis, Houtaro Ichinose, diberikan misi untuk mengingat kembali Chemy yang telah dilepaskan. Beberapa Chemy cocok untuk berteman dengan manusia dan dapat menyatu dengan mereka, mengubah Houtaro menjadi Kamen Rider Gotchard. Namun, Chemy yang dipengaruhi oleh kebencian manusia bisa menjadi monster yang dikenal sebagai Malgam.'
  : 'Kamen Rider Gotchard diciptakan sebagai bagian dari franchise Kamen Rider untuk terus menarik perhatian penonton dengan cerita yang segar dan karakter baru. Serial ini bertujuan untuk menghibur penonton dengan aksi yang menegangkan, efek khusus yang canggih, dan cerita yang menarik. Selain itu, Kamen Rider sering kali membawa pesan moral tentang kebaikan, keberanian, dan perjuangan melawan kejahatan.';

const whyText = isTransformed
  ? 'Dalam cerita ini, alkimia menjadi sebuah ilmu semu yang mencoba menciptakan emas dari berbagai kombinasi bahan. Salah satu eksperimen artifisial menghidupkan ras makhluk, menciptakan makhluk hidup buatan yang dikenal sebagai "Chemy", meniru benda-benda di dunia. Mereka dilepaskan ke alam liar secara tidak sengaja dari Ride Chemy Cards'
  : '"Alkimia" adalah ilmu semu yang berupaya menciptakan "emas" dari berbagai kombinasi berbeda. Salah satu eksperimen yang dilakukan secara artifisial menghidupkan ras makhluk, dan ceritanya berkisar pada era di mana eksperimen ini dilakukan secara rahasia.';

  return (
    <>
      <button className='kembali-appli'> <a href='/'>Back</a></button>
      <h1 className='appli-title'>Kamen Rider Gotchard </h1>
      <div className='container-appli'>
        <div className='appli-left'>
          <div className='left-1'>
            <h3 className='appli-content-title'>What</h3>
            <p className='appli-content-subtitle'>{whatText}</p>
          </div>
          <div className='left-2'>
            <h3 className='appli-content-title'>How</h3>
            <p className='appli-content-subtitle'>Kamen Rider Gotchard bertransformasi menggunakan alat khusus yang disebut Driver dan kartu-kartu atau perangkat teknologi lainnya yang memberikan kekuatan tambahan Proses transformasi biasanya melibatkan urutan animasi yang spektakuler dan berubah menjadi pahlawan bertopeng dengan kostum dan senjata yang unik Gotchard bertarung melawan musuh-musuhnya dengan berbagai teknik bela diri kekuatan khusus dan senjata canggih</p>
          </div>
        </div>
        <div className='appli-img'>
          {/* Gambar yang berubah berdasarkan status transformasi */}
          <img src={imageSource} alt="Kamen Rider" />
        </div>
        <div className='appli-right'>
          <div className='right-1'>
            <h3 className='appli-content-title'>Who</h3>
            <p className='appli-content-subtitle'>{whoText}</p>
          </div>
          <div className='right-2'>
            <h3 className='appli-content-title'>Why</h3>
            <p className='appli-content-subtitle'>{whyText}</p>
          </div>
        </div>
      </div>
      {/* Tombol untuk mengubah gambar dan teks */}
      <button className='transform-btn' onClick={handleTransformClick}>{buttonText}</button>
      <button className='next-btn'><a href='/materi'>Next</a></button>
    </>
  );
};

export default Index;
