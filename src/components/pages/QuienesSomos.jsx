import React from 'react';
import Portada from '../../assets/OIG1.jpg'


const QuienesSomos = () => {
    return (
        <>
         <section className="main somos ">
            <section className='container border '>  
            <h1> QUIENES SOMOS?</h1>
            <img className="img-banner img-fluid w-100" src={Portada} alt="Hotel cyber" />
            <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ducimus. Dicta illo similique nemo? Omnis architecto, soluta, tempora iusto fuga doloribus cumque velit nam quas officia vitae, neque voluptates eveniet?</article>
            </section>
            <div className='bgNombres'>holi</div>
            </section>
        </>
    );
};

export default QuienesSomos;