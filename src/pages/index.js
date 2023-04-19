import Layout from '../components/layout';
import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Homepage = ()=> {
  return(
    <div>
      <Layout pageHeading='Home Page' pageTitle='Home'>
          Welcome to my HomePage
          <StaticImage src='https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&width=1200' 
          layout='fullWidth'/>
      </Layout>
    </div>
  )
}

export default Homepage;