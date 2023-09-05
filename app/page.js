import Project from '@/components/project'
import styles from './page.module.css'
import CreatorCard from '@/components/creator-card'

export default function Home() {
  return (
    <main className={styles.main}>
    <Project/>
    <CreatorCard/>
    </main>
  )
}
