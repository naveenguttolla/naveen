import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
  
    <div className='container'>
        <div className='row'>
         <div className='col-sm-1'>
         <nav class="navbar navbar-lg bg-body-tertiary">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      {/* <Link to="./Products"> */}
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        {/* </Link> */}
        <li class="nav-item">
          <a class="nav-link" href="#">NEWS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">REVIWS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">VIDEOS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FEATURED</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PHONE FINDER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> DEALS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">MERCH</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">COVERAGE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        </div>  
      <div className='col-sm-2 mt-1'>
        <img src='https://cdn.freelogovectors.net/wp-content/uploads/2022/01/gsmarena-logo-freelogovectors.net_.png' width={180} height={40}/>
      </div>



        <div className='col-sm-3'>
          
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          </div> 

        <div className='col-sm-6 '>
          
          <div id='fa'>
        <i class="fa-solid fa-lightbulb" >tips us</i>
        </div>
        <div id='fa'>
        <i class="fa-brands fa-youtube">1.7M</i>
        </div>
        <div id='fa'>
        <i class="fa-brands fa-instagram">126k</i>
        </div>
        <div id='fa'>
        <i class="fa-solid fa-wifi">RSS</i>
        </div>
        <div id='fa'>
        <i class="fa-solid fa-car">EV</i>
        </div>
        <div id='fa'>
        <i class="fa-solid fa-cart-shopping">MERCH</i>
        </div>
        <div id='fa'>
        <i class="fa-solid fa-backward">LOG IN</i>
        </div>
        <div id='fa'>
        <i class="fa-solid fa-user-plus">SIGN UP</i>
        </div>
        </div>
        
        </div>
    </div>
    
     <div className='container'>
      <div className='row'>
        <div className='col-sm-4'>
        <Link to="./Products">
          <h2>PHONE FINDER</h2>
        </Link>
          <div className='row'>
          <div className='col-sm-3'>
            
            <h6>SAMSUNG</h6>
            <h6>APPLE</h6>
            <h6>HUAWEL</h6>
            <h6>NOKIA</h6>
            <h6>SONY</h6>
            <h6>LG</h6>
            <h6>HTC</h6>
            <h6>MOTOROLA</h6>
            <h6>LENOVO</h6>
            </div>

          <div className='col-sm-3'>
            
            <h6>XIAOMI</h6>
            <h6>GOOGLE</h6>
            <h6>HONOR</h6>
            <h6>OPPO</h6>
            <h6>REALME</h6>
            <h6>ONEPLUS</h6>
            <h6>VIVO</h6>
            <h6>MEIZU</h6>
            <h6>BLACKBERRY</h6>
            </div>
                    <div className='col-sm-3'>
            
            <h6>ASUS</h6>
            <h6>ALCATEL</h6>
            <h6>ZTE</h6>
            <h6>MICROSOFT</h6>
            <h6>VODAFONE</h6>
            <h6>ENERGIZER</h6>
            <h6>CAT</h6>
            <h6>SHARP</h6>
            <h6>MICROMAX</h6>
            </div>

          
          <div className='col-sm-3'>
            
            <h6>INFINIX</h6>
            <h6>ULEFONE</h6>
            <h6>TECNO</h6>
            <h6>DOOGEE</h6>
            <h6>BLACKVIEW</h6>
            <h6>CUBOT</h6>
            <h6>OUKITEL</h6>
            <h6>ITEL</h6>
            <h6>TCL</h6>
            </div>
          </div>
          </div>
       <div className='col-sm-4'>
        <img src='https://fdn.gsmarena.com/imgroot/reviews/24/vivo-v30-pro/-728x314/gsmarena_001.jpg' width={450} height={300}/>
       </div>
      
      <div className='col-sm-4'>
        <img src='https://fdn.gsmarena.com/imgroot/reviews/24/xiaomi-14/-347x151/gsmarena_000.jpg'/>
        <img src='https://fdn.gsmarena.com/imgroot/reviews/24/honor-magic6-pro/-347x151/gsmarena_003.jpg'/>
      </div>



      </div>
    </div>
    
     <div className='container'>
      <div className='row'>
        <div className='col-sm-4'>
          <img src='https://fdn.gsmarena.com/imgroot/static/banners/self/review-xiaomi-13-ultra-300x250px.jpg' width={400}/>
        </div>

        <div className='col-sm-4'>
          
          <img src='https://fdn.gsmarena.com/imgroot/reviews/24/oneplus-12r/lifestyle/-1200w5/gsmarena_022.jpg' width={450} height={350}/>
        </div>
        
        <div className='col-sm-4'>
          <img src='https://fdn.gsmarena.com/imgroot/news/24/02/oneplus-12r-genshin-impact-edition/-1220x526/gsmarena_000.jpg' width={350} height={350}/>
        </div>
      </div>
    </div>
     
     <div className='container'>
     <div className='row'>
      <div className='col-sm-4'>
      <h2>LATEST DEVICES</h2>
          <div className='row'>
          <div className='col-sm-4 '>
            <img src='https://fdn2.gsmarena.com/vv/bigpic/oppo-watch-x.jpg'width={80} height={200} id='id'/>
            <h6>Oppo Watch X</h6>
            </div>

            <div className='col-sm-4'>
            <img src='https://fdn2.gsmarena.com/vv/bigpic/meizu-21-pro.jpg' width={80} height={200} id='id'/>
            <h6>Meizu 21 Pro</h6>
            </div>

            <div className='col-sm-4'>
            <img src='https://fdn2.gsmarena.com/vv/bigpic/realme-12-plus.jpg'width={80} height={200}id='id'/>
            <h6>Realme 12+</h6>
            </div>

            <div className='col-sm-4'>
            <img src='https://fdn2.gsmarena.com/vv/bigpic/oppo-f25-pro.jpg' width={80} height={200}id='id'/>
            <h6>Oppo F25 Pro</h6>
            </div>
            <div className='col-sm-4'>
            <img src='https://fdn2.gsmarena.com/vv/bigpic/vivo-v30-pro.jpg' width={80} height={200}id='id'/>
            <h6>vivo V30 Pro</h6>
            </div>
            <div className='col-sm-4'>
            <img src='https://fdn2.gsmarena.com/vv/bigpic/zte-nubia-focus-pro-5g.jpg' width={80} height={200}id='id'/>
            <h6>ZTE nubia Focus Pro</h6>
            </div>
            </div>

      </div>
      <div className='col-sm-8'>
        <h1>WHICH ARE THE BEST PHONES?</h1>
        <h5>OUR SHORTLIST OF THE MOST NOTEWORTHY PHONES NOW</h5>
        <div class="card text-bg-dark">
  <img src="https://files.gsmchoice.com/news/20623/meizu-20-pro-tl-large.jpg" class="card-img" alt="..."height={400}/>
  <div class="card-img-overlay">
   
    <div id='hh'>
    <h3>9Meizu 21 Pro arrives with 6.79" LTPO display, 50MP main and 10MP 3x tele cameras</h3></div>
  </div>
</div>
      </div>

      </div> 
    </div>
     
    <div className='container'>
     <div className='row'>
      <div className='col-sm-4'>
      <h2>LATEST DEVICES</h2>
          <div className='row'>
          <div className='col-sm-4 '>
            <img src='https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-new.jpg'width={100} height={200}id='id'/>
            <h6>Xiaomi 14</h6>
            </div>

            <div className='col-sm-4'>
            <img src='https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra-new.jpg' width={100} height={200}id='id'/>
            <h6>Xiaomi 14 Ultra</h6>
            </div>

            <div className='col-sm-4'>
            <img src='https://fdn2.gsmarena.com/vv/bigpic/vivo-neo9.jpg'width={100} height={200}id='id'/>
            <h6>vivo iQOO Neo9 Pro</h6>
            </div>

            <div className='col-sm-4'>
            <img src='https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-a3.jpg' width={100} height={200}id='id'/>
            <h6>Xiaomi Redmi A3</h6>
            </div>
            <div className='col-sm-4'>
            <img src='https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-40i.jpg' width={100} height={200}id='id'/>
            <h6>Infinix Hot 40i</h6>
            </div>
            <div className='col-sm-4'>
            <img src='https://fdn2.gsmarena.com/vv/bigpic/honor-x9b.jpg' width={100} height={200}id='id'/>
            <h6>Honor X9b</h6>
            </div>
            </div>
    
            </div>
            <div className='col-sm-8'>
            
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://fdn.gsmarena.com/imgroot/news/21/03/disney-plus-100m-subscribers/-344x215/gsmarena_000.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Reliance and Disney join forces on $8.5 billion media giantReliance and Disney join forces on $8.5 billion media giant</h5>
        <p>Reliance and Disney join forces on $8.5 billion media gianteliance will invest $1.4 billion (INR 11,500 crore) into the partnership for its growth strate</p>
      </div>
    </div>
  </div>
  <img src='https://fdn.gsmarena.com/imgroot/news/24/02/realme-12-plus-5g-specs-processor-display-cameras/-1220x526/gsmarena_001.jpg' width={900}id='im'/>

            </div>
</div> 
</div> 

<div className='container'>
  <div className='row'>
    <div className='col-sm-4'>
      <div className='row'>
        <h2>TOP 10 BY DAILY INTEREST</h2>
        <div className='col-sm-6'>
        <h3>Device</h3>
        <h6>1.Xiaomi 14 Ultra</h6>
        <h6>2.Xiaomi Note 13 Pro</h6>
        <h6>3.Samsung S24 Ultra</h6>
        <h6>4.Xiaomi 14</h6>
        <h6>5.Apple iPhone 11</h6>
        <h6>6.Samsung Galaxy A54</h6>
        <h6>7.Xiaomi Redmi Note 13</h6>
        <h6>8.Xiaomi Note 13 Pro+</h6>
        <h6>9.Apple iPhone 15 Pro Max</h6>
        <h6>10.Xiaomi Poco X6 Pro</h6>
        </div>
        <div className='col-sm-6'>
        <h3>	Daily hits</h3>
        <h6>50,030</h6>
        <h6>37,925</h6>
        <h6>33,758</h6>
        <h6>32,769</h6>
        <h6>27,433</h6>
        <h6>27,099</h6>
        <h6>27,044</h6>
        <h6>25,044</h6>
        <h6>23461</h6>
        <h6>21537</h6>
        </div>
      </div>
    </div>
    <div className='col-sm-8'>
    <div class="row g-0">
    <div class="col-md-4">
      <img src="https://fdn.gsmarena.com/imgroot/news/24/02/samsung-galaxy-z-flip6-renders/-344x215/gsmarena_000.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Samsung Galaxy Z Flip6 renders show a familiar design, but dimensions suggest changesSamsung Galaxy Z Flip6 renders show a familiar design, but dimensions suggest changes</h5>
        <p>Samsung Galaxy Z Flip6 renders show a familiar design, but dimensions suggest changesThis generation seems focused on refinement more than major changes.</p>
      </div>
    </div>
  </div>
  <img src='https://fdn.gsmarena.com/imgroot/static/banners/self/review-sony-xperia-1v-728x90.jpg' width={900} height={150} id='im'/>
    </div>
  </div>
</div>

 <div className='container'>
  <div className='row'>
    <div className='col-sm-4'>
      <div className='row'>
        <h2>TOP 10 BY FANS</h2>
        <div className='col-sm-6'>
        <h3>Device</h3>
        <h6>1.Samsung  S23 Ultra</h6>
        <h6>2.Samsung Galaxy A54</h6>
        <h6>3.	Samsung S24 Ultra</h6>
        <h6>4.	Google Pixel 7 Pro</h6>
        <h6>5.Samsung Galaxy S23</h6>
        <h6>6.	Xiaomi 13 Pro</h6>
        <h6>7.Xiaomi Poco F5</h6>
        <h6>8.	Sony Xperia 1 V</h6>
        <h6>9.	OnePlus 11</h6>
        <h6>	Xiaomi 13 Ultra</h6>
        </div>
        <div className='col-sm-6'>
        <h3>	Favorites</h3>
        <h6>1,546</h6>
        <h6>905</h6>
        <h6>761</h6>
        <h6>709</h6>
        <h6>627</h6>
        <h6>603</h6>
        <h6>587</h6>
        <h6>571</h6>
        <h6>525</h6>
        <h6>519</h6>
        </div>
        <img src='https://fdn.gsmarena.com/imgroot/static/banners/self/review-sony-xperia-1v-300x250.jpg'/>
        <img src='https://fdn.gsmarena.com/imgroot/static/banners/self/arenaev-bmwi7-300x250.jpg'/>
        <img src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/aac8db5c-ada9-412c-87a8-dd2c45ce2353.jpg'/>
        <img src='https://tpc.googlesyndication.com/simgad/9965545064445993168'/>
      </div>
    </div>
    <div className='col-sm-8'>
      <img src='https://fdn.gsmarena.com/imgroot/news/24/02/oppo-f25-pro-ofic/-952x498w6/gsmarena_001.jpg' id='non'/>
    <div class="row g-0">
    <div class="col-md-4">
      <img src="https://fdn.gsmarena.com/imgroot/news/24/02/samsung-galaxy-z-fold-6-ultra-rumor/-344x215/gsmarena_00.jpg" class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Samsung to launch two Galaxy Z Fold 6 models including an UltraSamsung to launch two Galaxy Z Fold 6 models including an Ultra</h5>
        <p>Z Fold6 Ultra is said to offer a few key exclusivities like a 200MP main cam and optional stylus support.</p>
      </div>
    </div>
  </div>
   <img src='https://fdn.gsmarena.com/imgroot/static/banners/self/review-sony-xperia-1v-728x90.jpg' width={900} height={200} id='non'/>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://fdn.gsmarena.com/imgroot/news/24/02/mwc-2024-awards/-344x215/gsmarena_001.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Samsung to launch two Galaxy Z Fold 6 models including an UltraSamsung to launch two Galaxy Z Fold 6 models including an Ultra</h5>
        <p>Z Fold6 Ultra is said to offer a few key exclusivities like a 200MP main cam and optional stylus support.</p>
      </div>
    </div>
  </div>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://fdn.gsmarena.com/imgroot/news/23/05/vivo-x-fold2-ifr/-344x215/gsmarena_00.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">MWC 2024 Awards announced: Google Pixel 8 series wins Best SmartphoneMWC 2024 Awards announced: Google Pixel 8 series wins Best Smartphone</h5>
        <p>MWC 2024 Awards announced: Google Pixel 8 series wins Best Smartphone
Galaxy Tab S9 Ultra is Best Connected Consumer Device, Honor Magic V2 RSR is Best in Show.</p>
      </div>
    </div>
  </div>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://fdn.gsmarena.com/imgroot/news/24/02/snapdragon-8-gen-4-october-launch-confirmed/-344x215/gsmarena_001.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">vivo X Fold3 to arrive soon as the first foldable with Snapdragon 8 Gen 3vivo X Fold3 to arrive soon as the first foldable with Snapdragon 8 Gen 3</h5>
        <p>The device will be lighter and thinner than any other competitor.</p>
      </div>
    </div>
  </div>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://fdn.gsmarena.com/imgroot/news/24/02/helio-g91-announced/-344x215/gsmarena_000.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Snapdragon 8 Gen 4 with Oryon CPU is coming in OctoberSnapdragon 8 Gen 4 with Oryon CPU is coming in October</h5>
        <p>It will be introduced at the Snapdragon Summit.</p>
      </div>
    </div>
  </div>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://fdn.gsmarena.com/imgroot/news/24/02/zte-nubia-pad-3d-ii/-344x215/gsmarena_000.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">MediaTek unveils the 4G-only Helio G91 SoCMediaTek unveils the 4G-only Helio G91 SoC</h5>
      <p>It has a better ISP compared to its predecessors.

</p>
      </div>
    </div>
  </div>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://fdn.gsmarena.com/imgroot/news/24/02/tecno-concepts-mwc-2024/-344x215/gsmarena_000.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">The nubia Pad 3D II launches with an improved glasses-free 3D display, Snapdragon 8 Gen 2The nubia Pad 3D II launches with an improved glasses-free 3D display, Snapdragon 8 Gen 2</h5>
        <p>This is “world’s first 5G+AI eyewear free 3D tablet”. The original Pad 3D lacked cell connectivity and lacked the advanced AI-based features of the new model.</p>
      </div>
    </div>
  </div>
  
    </div>
  </div>
</div>



 

    </>
  )
}

export default Header