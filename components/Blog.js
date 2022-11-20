import React from 'react'
import BlogLeftCenter from '../components/subcomponents/BlogLeftCenter'
import BlogRightCenter from './subcomponents/BlogRightCenter.js'
import Hero from '../components/Hero'

const Blog = () => {
  return (
    <div>
<BlogLeftCenter/>
<BlogRightCenter/>
<Hero props={"Dont know the name yet"} pic={"https://i.ibb.co/5RnVQ8X/wtf.jpg"}/>
    </div>
  )
}

export default Blog