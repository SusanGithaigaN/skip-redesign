import React from 'react'
import Progress from './Progress'
import Cards from './Cards'
import { Helmet } from 'react-helmet';
import Footer from './Footer'

export const Home = () => {
    return (
        <div className='home-page'>
            {/* Metadata for SEO */}
            <Helmet>
                <title>Skip re-design</title>
                <meta
                    name="description"
                    content="REM Waste operates in the Waste Management UK sector partnering with over 750 different organisations delivering and supporting companies from construction, engineering, demolition, insulation to domestic households."
                />
                <meta
                    name="keywords"
                    content="waste collection, UK waste management, recycling services, eco-friendly disposal, non-hazardous waste, UK"
                />
                <meta property="og:title" content="We Want Waste | Sustainable Waste Collection UK" />
                <meta
                    property="og:description"
                    content="Eco-friendly non‑hazardous waste collection and recycling services across the UK."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://skip-redesign.netlify.app/" />
                <meta property="og:image" content="https://www.renewableenergymarketing.net/wp-content/uploads/2019/02/Skip-Hire-REM-Waste-Transparent-logo.png" />
                <link rel="canonical" href="REM Waste Management" />

                {/* Structured data for SEO */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "REM Waste Management",
              "alternateName": "REM Waste",
              "url": "http://remwaste.com/",
              "logo": "https://www.renewableenergymarketing.net/wp-content/uploads/2019/02/Skip-Hire-REM-Waste-Transparent-logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/rem-waste-management/"
              ],
              "description": "Eco-friendly non‑hazardous waste collection and recycling services across the UK."
            }
          `}
                </script>
            </Helmet>
            {/* page content */}
            <Progress />
            <Cards />
            <Footer />
        </div>
    )
}

export default Home