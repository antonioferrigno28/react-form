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
  const [addNewPost, setAddNewPost] = useState(posts);

  function handleInput(e) {
    setAddNewPost(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!addNewPost) {
      alert("Hai lasciato un campo vuoto");
      return;
    }

    setAddNewPost([...posts, addNewPost]);
  }

  return (
    <>
      <div className="container">
        <h1 className="mt-5">BoolBlog</h1>
        <div className="wrapper mt-5">
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <input
                type="text"
                placeholder="Inserisci il nome"
                onChange={handleInput}
              />
              <input
                type="text"
                className="ms-2"
                placeholder="Inserisci il contenuto"
                onChange={handleInput}
              />
              <button className="ms-2">Invia</button>
            </div>
          </form>
          <ul>
            {posts.map((post) => (
              <li key={post.id} className="my-2">
                <b>{post.autore}: </b>
                {post.contenuto}
                <button className="ms-2">Modifica titolo</button>
                <button className="ms-2">Cancella</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
