import { Blog, Categories, Hero, HotDeals, Partners, PickTips } from '../components'

function Home() {
  return (
    <>
      <Hero />
      <HotDeals />
      <Categories />
      <Partners />
      <PickTips />
      <Blog />
    </>
  )
}

export default Home