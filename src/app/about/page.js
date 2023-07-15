import SubPageHero from '../components/SubPageHero'
import StatsDescription from '../components/StatsWithDescription'

export default function About() {
  const heroContent = {
    label: 'About Us',
    title: 'Our Company'
  }
  return (
    <main>
      <SubPageHero content={heroContent} borderBtm={true} />
      <StatsDescription />
    </main>
  )
}
  