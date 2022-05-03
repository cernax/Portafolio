/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import M from 'materialize-css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import Home from './Home/home';

const elems = document.querySelectorAll('.sidenav');
M.Sidenav.init(elems, {
  edge: 'left',
  draggable: true
});

const popup = document.querySelectorAll('.modal');
M.Modal.init(popup, {});

const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete, {});

function App() {
  const [login, setlogin] = useState(false);
  const [nameuser, setnameuser] = useState('');
  const [countbadge, setcountbadge] = useState(0);

  return (
    <>
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              <i className="material-icons left">library_books</i>
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a
                  className="waves-effect waves-light btn modal-trigger"
                  style={{ visibility: 'hidden' }}
                  data-target="modal1"
                >
                  Login
                </a>
              </li>
              <li>
                <a href="#!" className="collection-item">
                  <div className="chip">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                      alt="img"
                    />
                    Jane Doe
                  </div>
                  {countbadge > 0 ? (
                    <span className="new badge">{countbadge}</span>
                  ) : (
                    <> </>
                  )}
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <ul className="sidenav" id="mobile-demo">
            <li>
              <a
                className="waves-effect waves-light btn modal-trigger"
                style={{ visibility: 'hidden' }}
                data-target="modal1"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Formulario</h4>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="last_name"
                    type="text"
                    className="validate"
                    onChange={(e) => setnameuser(e.target.value)}
                  />
                  <label htmlFor="last_name">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="modal-close btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={() => setlogin(true)}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
          <a className="modal-close waves-effect waves-green btn-flat">
            Cerrar
          </a>
        </div>
      </div>
      <div>
        <Routes>
          <Route
            path=""
            element={
              <Home
                contadorbadge={(value) => setcountbadge(countbadge + value)}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
