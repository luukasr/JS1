document.getElementById('searchForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const query = document.getElementById('query').value;
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); 1  // Log the received JSON data to the console
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

