import React from 'react'
import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'

import Link from 'next/link'
import { Card, Col, Row } from 'react-bootstrap'

import { MdNewReleases } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'

import styles from '../../styles/index.module.css'

const index = ({ filmes }) => {
    return (
        <Pagina titulo="Filmes Populares">
            <Row md={4}>
                {filmes.map(item => (
                    <Col className={styles.colUm}>
                        <Card className={styles.cardtamanho} >
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <p><MdNewReleases/><strong>     Lançamento: </strong>{item.release_date}</p>
                                <p><FaStar/><strong>    Nota: </strong>{item.vote_average}</p>
                                <Link className='btn btn-danger' href={'/filmes/' + item.id}>Detalhes</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/movie/popular?language=pt-BR')
    const filmes = resultado.data.results

    return {
        props: { filmes },
    }
}