import React from 'react'
import Link from 'gatsby-link'
import Search from './search'

const linkStyle = {
  color: 'white',
  fontFamily: 'sans-serif',
  textDecoration: 'none'
}

// TODO: Language link should be a component

class Header extends React.Component{
  constructor(props) {
    super(props)
  }

  languageLink(lang) {
    const handleClick = (e) => {
      e.preventDefault();
      this.props.toggleLanguageButtonState();
      const clickedLang = e.target.attributes.getNamedItem('data-lang').value;
      this.props.changeLanguage(clickedLang);
    }
    return (
      <a href="#" onClick={handleClick} id='btn_' style={linkStyle} data-lang={lang}>
        {lang === 'en' ? 'English' : 'Chinese'}
      </a>
    )
  }

  render() {
    const { siteTitle } = this.props;
    return (
      <div
    style={{
      background: 'darkblue',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ 
        margin: 0,
        display: 'inline-block'
      }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Search {...this.props}/>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: '1em',
        float: 'right',
        margin: '0'
      }}>
        <li>{this.languageLink(`en`)}</li>
        <li style={linkStyle}>&nbsp; | &nbsp;</li>
        <li>{this.languageLink(`cn`)}</li>
      </ul>
    </div>
  </div>
    )
  }
}

export default Header
