import React, { Component } from 'react';
import api from '../../services/api';
import "./style.css";


export default class Main extends Component {
    state = {
        projetos: []
    };

    componentDidMount() {
        this.loadProjetos();
    }

    loadProducts = async () => {
        const response = await api.get('/projetos/?limit=2');
        this.setState({ projetos: response.data._embedded.projects });

    };

    render() {
        const { projetos } = this.state;

        return (

             <div className="project-list">


                {projetos.map(project => (

                    <strong>{project.nome}</strong>
                     <p proponente={project.proponente}></p>
                     <p area={project.area}></p>
                     <p municipio={project.municipio}></p>
                     <p uf={project.UF}></p>
                     <p valor_aprovado={project.valor_aprovado}></p>
                     <p valor_captado={project.valor_captado}></p>
                

                ))}
                              
            
            </div>
       );
    }
}