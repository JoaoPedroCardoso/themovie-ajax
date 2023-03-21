const getMostPopularFilms = () =>  {
  var request = "https://api.themoviedb.org/3/movie/popular?api_key=ce789c8afdb9102d38a3e42246376aea&language=en-US&page=1";
  
  axios.get(request)
  .then(filmes => {
    console.log(filmes)
    filmes.data.results.splice(0,10).forEach(filme => {
      const novaLinha = document.getElementById("tbody").insertRow();

      const poster = novaLinha.insertCell();
      const title = novaLinha.insertCell();
      const date = novaLinha.insertCell();
      const votes = novaLinha.insertCell();
      const avaliacoes = novaLinha.insertCell();
      const overview = novaLinha.insertCell();

      const image = "https://image.tmdb.org/t/p/w500" + filme.poster_path;
      var posterImg = document.createElement("img");
      posterImg.setAttribute("src", image);
      posterImg.setAttribute("class", "poster");
      poster.appendChild(posterImg);

      title.innerText = filme.original_title;
      title.setAttribute("class", "title");

      overview.innerText = filme.overview;
      overview.setAttribute("class", "description");

      date.innerText = filme.release_date;
      date.setAttribute("class", "data");

      votes.innerText = filme.vote_average;
      votes.setAttribute("class", getRattingClass(filme.vote_average));

      avaliacoes.innerText = filme.vote_count;

    });
  })
  .catch(error => {
    console.log(error);
  });

}

const getRattingClass = (votos) => (votos > 6) ? "rating-positive" : "rating-negative";
