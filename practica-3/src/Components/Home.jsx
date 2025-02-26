// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Home.css'

const Home = () => {
  return (
    
    <>
    <nav>
  <div className="astronomia">
    <a href="/">Astronomía</a>
  </div>
  
   <div className="menu">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/universo">Universo</a></li>
      <li><a href="/sistema">Sistema Solar</a></li>
      <li><a href="/tierra">Tierra y Luna</a></li>
      <li><a href="/footer">Contact</a></li>
    </ul>
  </div>
</nav>
<div className="container">
  <div className='div-left'>
<ul className="left-list"><h2 className='lo-visto'>Lo + visto</h2>
  <li className="left-li"><a className='' href='https://www.astromia.com/astronomia/gravita.htm'>Isaac Newton y la ley de la gravedad</a></li>
  <li className="left-li"><a href='https://www.astromia.com/astronomia/teoriabigbang.htm'>La teoria del Big Bang y el origen del Universo</a></li>
  <li className="left-li"><a href='https://www.astromia.com/astronomia/leyteoria.htm'>Leyes y teorías astronómicas</a></li>
  <li className="left-li"><a href='https://www.astromia.com/astronomia/vidaextraterrestre.htm'>¿Hay vida extraterrestre?</a></li>
</ul>
</div>
  
  <section className="image-section">
    <img className="uni-img" src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVuaXZlcnNlfGVufDB8fDB8fHww" alt="Image 1" />
    <img className="uni-img" src="https://imgs.search.brave.com/TD-oAuNjsGLEFKemtBRlNXVLFNyU1upD8KhPX7ricCA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhu/aW8uY29tL2ZyZWUt/aW1hZ2VzLzIwMjMv/MDgvMTYvMjAyMy0w/OC0xNi0xOS0yMS0y/My01NzZ4NTc2Lmpw/Zw" alt="Image 2" />
    <img className="uni-img" src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHVuaXZlcnNlfGVufDB8fDB8fHww" alt="Image 3" />
  </section>
  
  <div className='div-right'>
  <ul className="right-list">
    <h1>Cosmología física</h1>
    <img className='right-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Evolucion_Universo_CMB_Timeline300_no_WMAP.jpg/1280px-Evolucion_Universo_CMB_Timeline300_no_WMAP.jpg" alt="" />
    <h1 className='li-h1'>Articulos</h1>
    <li className='right-li'>Universo primitivo:
      <p>
      <a href="https://es.wikipedia.org/wiki/Teor%C3%ADa_del_Big_Bang">Teoría del Big Bang</a>
      <a href='https://es.wikipedia.org/wiki/Inflaci%C3%B3n_c%C3%B3smica'>Inflación cósmica</a>
      <a href='https://es.wikipedia.org/wiki/Bariog%C3%A9nesis'>Bariogénesis</a>
      <a href='https://es.wikipedia.org/wiki/Nucleos%C3%ADntesis_primordial'>Nucleosíntesis primordial</a>
      </p></li>
    <li className='right-li'>Expansion
      <p >
        <a href="https://es.wikipedia.org/wiki/Expansi%C3%B3n_m%C3%A9trica_del_espacio">Expansión métrica del espacio</a>
        <a href="https://es.wikipedia.org/wiki/Expansi%C3%B3n_acelerada_del_universo">Expansión acelerada del universo</a>
        <a href="https://es.wikipedia.org/wiki/Ley_de_Hubble-Lema%C3%AEtre">Ley de Hubble</a>
        <a href="https://es.wikipedia.org/wiki/Corrimiento_al_rojo">Corrimiento al rojo</a>
      </p>
      </li>
  </ul>
  </div>
  </div>
    </>
  )
}

export default Home
