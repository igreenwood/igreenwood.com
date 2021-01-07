import { Project } from '../interfaces'
import styles from './ProjectDetail.module.css'
import Container from './Container'

type Props = {
    project: Project
}

export default function ProjectDetail({ project }: Props) {
    return <article>
        <figure>
            <div className={ styles.fixedRatioWrapper }>
                <div className={ styles.imageContainer }>
                    <img className={ styles.coverImage } src={ project.coverImageUrl.url }/>
                </div>
            </div>
        </figure>
        <Container>
            <section>
                <h2 className={ styles.title }>{ project.title }</h2>
                <div className={ styles.subtitleContainer }>
                    <span className={ styles.date }>DATE: { project.date }</span><span className={ styles.genre }>GENRE: { project.genre }</span>
                </div>
                <div className={ styles.description }>{ project.description }</div>
            </section>
        </Container>
    </article>
}