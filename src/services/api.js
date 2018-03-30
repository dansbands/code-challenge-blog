const getPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
}

const submitPost = data => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "Application/Json",
      Accept: "Application/Json"
    },
    body: JSON.stringify(data)
  })
  .then(resp => resp.json())
}

export default {
  getPosts,
  submitPost,
}
