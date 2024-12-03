import { useState } from "react";
import postsData from "./data/posts";

// Esercizio
// Creare un semplice form con un campo input per il titolo di un articolo del blog.

// Al submit del form, mostrare la lista degli articoli inseriti.

// Infine dare la possibilità di cancellare ciascun articolo utilizzando un'icona.

// BONUS
// Implementare la funzionalità di modifica del titolo di un post.
// Aggiungere più campi al form (ad es. lo stato di un articolo - draft, published - o l’autore)
// Buon lavoro!

function App() {
  const [newPost, setNewPost] = useState({
    autore: "",
    contenuto: "",
  });

  const [posts, setPosts] = useState(postsData);

  function handleInput(e) {
    const { name, value } = e.target;
    let currentAuthor = newPost.autore;
    let currentContent = newPost.contenuto;
    //modifichiamo autore o content?
    if (name === "autore") {
      currentAuthor = value;
      console.log("modifying author with value " + " " + value);
    } else if (name === "contenuto") {
      currentContent = value;
    }

    //aggiorno valore

    setNewPost({
      autore: currentAuthor,
      contenuto: currentContent,
    });
    console.log("ao" + " " + value + " " + name);
    console.log(newPost.autore, newPost.contenuto);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!newPost.autore || !newPost.contenuto) {
      alert("Hai lasciato un campo vuoto");
      return;
    }

    setPosts([...posts, newPost]);
    setNewPost({ autore: "", contenuto: "" });
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
                name="autore"
                placeholder="Inserisci il nome"
                onChange={handleInput}
                value={newPost.autore}
              />
              <input
                type="text"
                name="contenuto"
                className="ms-2"
                placeholder="Inserisci il contenuto"
                onChange={handleInput}
                value={newPost.contenuto}
              />
              <button className="ms-2">Invia</button>
            </div>
          </form>
          <ul>
            {posts.map((post, i) => (
              <li key={i} className="my-2">
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
