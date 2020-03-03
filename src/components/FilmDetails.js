import React, {Fragment} from 'react'
import Film from './Film'
import './FilmDetails.css'

function FilmDetails({ films }){
  const filmComponents = films.map(film => {
    return (
      <Film
      name={film.name}
      key={film.id}
      >
      {film.url}
      </Film>
    )
  })

  return(
    <Fragment>
    <h2>This Weeks Hottest Films!</h2>
    <ul className="film-list">
    <li>
      {filmComponents}</li>
       <li><a href="https://www.imdb.com/title/tt4633694/?ref_=rlm">SpiderMan into the Spiderverse</a></li>
       <li><a href="https://www.imdb.com/title/tt5989218/?ref_=rlm">Life Itself</a></li>
       <li><a href="https://www.imdb.com/title/tt2328900/?ref_=rlm">Mary Queen of Scots</a></li>
       <li><a href="https://www.imdb.com/title/tt3513498/?ref_=rlm">The Lego Movie 2: The Second Part</a></li>
       <li><a href="https://www.imdb.com/title/tt4154664/?ref_=rlm">Captain Marvel</a></li>
    </ul>
    </Fragment>
  )
}

export default FilmDetails
