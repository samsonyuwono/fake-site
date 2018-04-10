export function fetchVimeo() {
  fetch('https://vimeo.com/api/v2/channel/staffpicks/videos.json')
    .then(res => res.json())
    .then(json => console.log(json));
}

fetchVimeo()
