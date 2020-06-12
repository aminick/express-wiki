const React = require('react');

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <a className="navbar-brand" href="/">
        Wiki
      </a>
      <form method="GET" action="/search" className="form-inline my-2 my-lg-0">
        <input
          type="search"
          placeholder="search"
          className="form-control mr-sm-2"
          aria-label="search"
          name="q"
          id="q"
        />
        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}

module.exports = Navbar;
