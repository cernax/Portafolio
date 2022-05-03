/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import M from 'materialize-css';

const elems = document.querySelectorAll('.sidenav');
M.Sidenav.init(elems, {
  edge: 'left',
  draggable: true
});

const popup = document.querySelectorAll('.modal');
M.Modal.init(popup, {});

const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete, {});

function Home(props) {
  const [libros, setlibros] = useState([]);
  const [searchbooks, setsearchbooks] = useState(false);
  const [namebook, setnamebook] = useState('');
  const [loader, setloader] = useState(false);
  const [countbadge, setcountbadge] = useState(0);

  const getBooks = async () => {
    setloader(true);
    await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${namebook}&key=AIzaSyDLXYdi5BS5bLe3O8DVGeWtTCp1eaCljvs`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items);
        setlibros(data.items);
        setsearchbooks(true);

        setloader(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function pulsar(e) {
    debugger;
    if (e.key === 'Enter') {
      getBooks();
    }
  }

  return (
    <>
      <div className="row">
        <div className="col s12 m4 l2" />
        <div className="input-field col s12 m4 l8">
          <label htmlFor="last_name">Buscar Libros</label>
          <input
            id="last_name"
            type="text"
            className="validate"
            onChange={(e) => setnamebook(e.target.value)}
            onKeyPress={(e) => pulsar(e)}
          />
        </div>
        <a
          style={{ top: '20px' }}
          className="waves-effect waves-light btn"
          onClick={getBooks}
        >
          <i className="material-icons right">search</i>
          Buscar
        </a>
      </div>
      {loader ? (
        <div className="row">
          <div className="col s6 offset-s6">
            <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="gap-patch">
                  <div className="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          {libros.map((books) => (
            <div className="col s3">
              <div className="card medium">
                <div className="card-image waves-effect waves-block waves-light">
                  <img
                    className="responsive-img activator"
                    height={300}
                    width={10}
                    src={
                      books.volumeInfo.imageLinks !== undefined
                        ? books.volumeInfo.imageLinks.thumbnail
                        : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png'
                    }
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    {books.volumeInfo.title}
                    <i className="material-icons right">more_vert</i>
                  </span>
                  <p>
                    <a
                      className="waves-effect waves-light btn"
                      onClick={() => {
                        props.contadorbadge(1);
                      }}
                    >
                      <i className="material-icons right">add_shopping_cart</i>
                      comprar
                    </a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    {books.volumeInfo.title}
                    <i className="material-icons right">close</i>
                  </span>
                  <p>{books.volumeInfo.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Home;
