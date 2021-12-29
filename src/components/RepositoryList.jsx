import { Counter } from "./Counter";
import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'GitHub Explorer',
    descripstion: "Projeto em React", 
    link: "https://github.com/Nathalia-Urenha/github-explorer-rocketseat"
}

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>
              <RepositoryItem repository={repository}/>
            </ul>
            <Counter />
        </section>
    )
}