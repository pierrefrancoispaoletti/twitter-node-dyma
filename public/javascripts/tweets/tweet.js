window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.btn-danger');
    elements.forEach(element => {
        element.addEventListener('click', (e) => {
            const tweetId = e.target.getAttribute('tweetid');
            axios.delete('/tweet/' + tweetId)
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(err) {
                    console.error(err);
                });
        })
    });
});


