import { Hero } from '../components/home/Hero'
import { ProjectSnapshot } from '../components/home/ProjectSnapshot'
import { Overview } from '../components/home/Overview'
import { Challenges } from '../components/home/Challenges'
import { Solution } from '../components/home/Solution'
import { Experience } from '../components/home/Experience'
import { Impact } from '../components/home/Impact'

export function Home() {
  return (
    <>
      <Hero />
      <ProjectSnapshot />
      <Overview />
      <Challenges />
      <Solution />
      <Experience />
      <Impact />
    </>
  )
}

export default Home
