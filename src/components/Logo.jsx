import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// Config
import config from 'config/website'
// Components
import PageLink from 'components/PageLink'


const Title = styled.span`
  font-size: 1.4rem;
`

class Logo extends React.Component {
  constructor(props) {
    super(props)
    this.bPath = React.createRef()
    this.sPath = React.createRef()
  }

  componentDidMount() {
    // const bPath = this.bPath
    // const trackLength = bPath.getTotalLength().toString()
    // bPath.setAttribute('stroke-dasharray', `${trackLength},${trackLength}`)
  }

  render() {
    const { className, link, children } = this.props
    const siteTitle = config.siteTitleShort
    return (
      <PageLink
        className={`group flex text-white items-normal justify-center ml-0 z-10 ${className}`}
        label={siteTitle}
        to={link}
      >
        <span className='relative w-6 h-auto'>
          {children}
        </span>
        <Title className='logo-title relative font-medium text-white text-opacity-90 -top-0.5 opacity-50 group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100 ml-3 transition-opacity duration-200 ease-in-out cursor-default z-10'>{siteTitle}</Title>
      </PageLink>
    )
  }
}
Logo.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Logo
