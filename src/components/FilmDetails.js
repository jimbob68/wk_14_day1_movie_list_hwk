import React, {Fragment} from 'react'
import Film from './Film'
import './FilmDetails.css'

function FilmDetails({ films }){
  const filmComponents = films.map(film => {
    return (
      <Film
      name={film.name}
      key={film.id}
      url = {film.url}>
      </Film>
    )
  })

  return(
    <Fragment>
    <h2>This Weeks Hottest Films!</h2>
    <ul className="film-list">
    <li>
      {filmComponents}</li>
      
    </ul>
    </Fragment>
  )
}

export default FilmDetails
