import { Blog, Categories, Hero, HotDeals, Partners, PickTips, PopularProducts, UseDynamicTitle, Advertisement } from '../components'

function Home() {
  UseDynamicTitle();
  return (
    <>
      <Hero />
      <HotDeals />
      <Categories />
      <Advertisement />
      <PopularProducts />
      <Partners />
      <PickTips />
      <Blog />
    </>
  )
}

export default Home