import Head from 'next/head'

const Contacto = () => {
  return (
    <>
      <Head>
        <title>El Hueco - Contacto</title>
      </Head>
      <section>
        <h1>Contacto</h1>
        <p>Ponte en contacto con nosotros para más información, reservas o colaboraciones.</p>
      </section>
      <section>
        <h2>Ubicación</h2>
        <p>
          Nos encontramos en la Calle de la Creatividad, 123, Ciudad de la Innovación.
        </p>
      </section>
      <section>
        <h2>Forma de Trabajo</h2>
        <p>
          Nuestro método se basa en la colaboración, la transparencia y la co-creación. Trabajamos de cerca contigo
          para dar forma a tus ideas desde el concepto hasta la ejecución.
        </p>
      </section>
      <section>
        <h2>Formulario de Contacto</h2>
        <form>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  )
}

export default Contacto 