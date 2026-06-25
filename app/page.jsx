import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = async () => {
  const query = '*[_type == "product"]'
  const rawProducts = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]'
  const rawBannerData = await client.fetch(bannerQuery);

  // This cleans the data entirely so Next.js doesn't crash
  const products = JSON.parse(JSON.stringify(rawProducts));
  const bannerData = JSON.parse(JSON.stringify(rawBannerData));

  return (
    <div>
      <HeroBanner bannerData={bannerData} />

      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export default Home;