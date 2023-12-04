import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
// Elements
import Divider from 'elements/Dividers'
import Content from 'elements/Content'
import Inner from 'elements/Inner'
import { SectionTitle } from 'elements/Titles'
// Components
import Cube from 'components/Cube'


const avatarStyle = {
  boxShadow: '0 5px 30px 0 rgba(0,0,0,0.3), 0 1px 15px 0 rgba(0,0,0,0.25)',
}

const About = ({ id, avatar, isMobile }) => (
  <Divider
    className='flex relative bg-base-300'
    direction='right'
    offset={12}
  >
    <Content id={id}>
      <Inner>
        <div className='section-title flex items-baseline mb-2 sm:mb-0'>
          <Cube color='blue' />
          <SectionTitle>About</SectionTitle>
        </div>
        <div className='flex flex-col md:flex-row items-center mt-0 md:pt-2 px-2'>
          <GatsbyImage
            className='hidden sm:block w-1/2 md:w-full min-w-44 h-auto max-w-80 md:max-w-60 xl:max-w-120 rounded-full'
            image={avatar}
            alt='Zawyar Ur Rehman'
            style={avatarStyle}
          />
          <span className='text-white text-xl font-medium leading-tighter pt-8 hidden md:block md:pt-0 md:pl-10 lg:pl-12 lg:text-2xl xl:text-3xl'>
          Tech-savvy, self-driven Software Engineer with diverse skills, DevOps expertise, and a commitment to excellence. Yes, this is what one looks like in the wild.
          </span>
        </div>
        <p className='text-gray-700 text-lg lg:text-xl font-sans leading-normal pt-8 md:pt-6 lg:pt-8'>
        I'm an experienced Software Engineer with a robust background in Full-Stack development, AWS/GCP Infrastructure management, deployment and monitoring. Proven track record in optimizing CI/CD pipelines, reducing deployment times, and leading application performance improvements. I've been writing a lot of code since age 10, most of it I wouldn't dare show anyone.
        </p>
      </Inner>
    </Content>
  </Divider>
)
About.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
}

export default About
