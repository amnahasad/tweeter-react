import React from 'react'; //optional

function Navigation() {
  return (
    <nav>
      <span className="nav--text">tweeter</span>
      <div className="btn btn--scroll">
        <a href="#" class="btn__text btn--borderless" title="Compose Tweet">
          {/* Compose new tweet button  */}
          <span className="btn--bold">Write</span> a new tweet
          <br />
          <i className="btn__icon fas fa-angle-double-down"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navigation;