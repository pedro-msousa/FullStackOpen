const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) =>{
    const reducer = (sum, blog) => {
        return sum + blog.likes
    }

    return blogs.length === 0
    ? 0
    : blogs.reduce(reducer, 0)
}  
  
const favoriteBlog = (blogs) =>{
  if (blogs.length===0){return{}} else {
  
  let topLikes = blogs[0].likes
  let topIndex = 0

  for (let index = 0; index < blogs.length; index++) {
    if (blogs[index].likes > topLikes){
      topLikes = blogs[index].likes
      topIndex = index
    }
  }
  const mostLikesObject = 
  {
    title: blogs[topIndex].title,
    author: blogs[topIndex].author,
    likes: blogs[topIndex].likes
  }

  return (mostLikesObject)
  }
}

  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }