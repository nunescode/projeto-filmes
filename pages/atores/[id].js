import Pagina from '@/components/Pagina'

import apiFilmes from '@/services/apiFilmes'

import Link from 'next/link'

import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const DetalhesAtor = ({ ator }) => {

    const [filmes, setFilmes] = useState([])

    const buscarFilmesAtor = async (id) => {
        const resultado = await apiFilmes.get(`/person/${id}/movie_credits?language=pt-BR`)
        setFilmes(resultado.data.cast)
    }

    const handleClick = () => {
        buscarFilmesAtor(ator.id)
    }


    return (
        <Pagina titulo={ator.name}>

            <Row>
                <Col md={4}>
                    <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + ator.profile_path} />
                </Col>

                <Col md={8}>
                    <h2>{ator.name}</h2>
                    <p><strong>Gênero: </strong>{ator.gender === 1 ? 'Feminino' : 'Masculino'}</p>
                    <p><strong>Data de Nascimento: </strong>{ator.birthday}</p>
                    <p><strong>Local de Nascimento: </strong>{ator.place_of_birth}</p>
                    <p><strong>Popularidade: </strong>{ator.popularity}</p>
                    <p><strong>Biografia: </strong>{ator.biography}</p>
                    <h5>Filmes em que participou: </h5>
                    <p><Button className='btn btn-secondary' onClick={handleClick}>Buscar Filmes</Button></p>
                </Col>

            </Row>
            <br></br><br></br><br></br>

            <Row>
                {filmes.map((filme) => (
                    <Col key={filme.id} className="mb-3" md={2} title={filme.title}>
                        <Link href={`/filmes/${filme.id}`}>
                            <Card.Img
                                variant="top"
                                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}/>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Pagina >
    )
}


export default DetalhesAtor

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiFilmes.get('/person/' + id + '?language=pt-BR')
    const ator = resultado.data

    return {
        props: { ator },
    }
}
