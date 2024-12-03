import { useState } from "react";
import posts from "./data/posts";

// Esercizio
// Creare un semplice form con un campo input per il titolo di un articolo del blog.

// Al submit del form, mostrare la lista degli articoli inseriti.

// Infine dare la possibilità di cancellare ciascun articolo utilizzando un'icona.

// BONUS
// Implementare la funzionalità di modifica del titolo di un post.
// Aggiungere più campi al form (ad es. lo stato di un articolo - draft, published - o l’autore)
// Buon lavoro!

function App() {
  return (
    <>
      <div className="container">
        <h1 className="mt-5">BoolBlog</h1>
        <div className="wrapper mt-5">
          <form>
            <input type="text" />
            <button className="ms-2">Invia</button>
          </form>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <b>{post.autore}: </b>
                {post.contenuto}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
