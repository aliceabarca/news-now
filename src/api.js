const fetchNews = () => {
  return fetch(`https://newsapi.org/v2/everything?q=apple&from=2023-10-30&to=2023-10-30&sortBy=popularity&apiKey=1787216ec63047c49fd5a2f7f7f2b026`)
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error('Unable to retrieve data from server.')
    }
  })
}

export default fetchNews