const apiKey = "9a8cd7e7e1974f288bc6c5b69f2c2448";

const blogContainer = document.getElementById("blog-container");

const searchField = document.getElementById("serch-input");
const serchButton = document.getElementById("button");
// console.log(serchButton);
// console.log(searchField);
// console.log(blogContainer);
const apiUrl=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`;
        let response= fetch(apiUrl);
        console.log(response)

async function fetchRandomNews() {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9a8cd7e7e1974f288bc6c5b69f2c2448`;
    let response = await fetch(apiUrl);
    console.log(response);
    let data = await response.json();
    console.log(data);
    return data.articles;
  } catch (error) {
    console.log("error fetching random news", error);
    return [];
  }
}

serchButton.addEventListener("click", async () => {
  const query = searchField.value.trim();
  if (query !== "") {
    try {
      const artiles = await fetchNewQuery(query);
      displayBlogs(artiles);
    } catch (error) {
      console.log("Error in fetching news by query", error);
    }
  }
});
async function fetchNewQuery(query) {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=9a8cd7e7e1974f288bc6c5b69f2c2448`;
    let response = await fetch(apiUrl);
    console.log(response);
    let data = await response.json();
    console.log(data);
    return data.articles;
  } catch (error) {
    console.log("error fetching random news", error);
    return [];
  }
}

function displayBlogs(articles) {
  blogContainer.innerHTML = "";
  articles.forEach((element) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    const img = document.createElement("img");
    if (element.urlToImage) {
      img.src = element.urlToImage;
    } else if (element.urlToImage == null) {
      img.src = `https://placehold.co/600x400`;
    }

    img.alt = element.title;

    const title = document.createElement("h2");
    let truncatedTitle;

    if (element.title.length > 30) {
      truncatedTitle = element.title.slice(0, 30) + ".....";
    } else {
      truncatedTitle = element.title;
    }
    title.textContent = truncatedTitle;

    const description = document.createElement("p");

    if (element.description != null) {
      //  console.log(element.description.length);
      const truncatedDes =
        element.description.length > 130
          ? element.description.slice(0, 130) + "..."
          : element.description;
      description.textContent = truncatedDes;
    } else {
      description.textContent = element.description;
    }
    blogCard.appendChild(img);
    blogCard.appendChild(title);

    blogCard.appendChild(description);
    blogCard.addEventListener("click", () => {
      window.open(element.url, "_blacnk");
    });
    blogContainer.appendChild(blogCard);
  });
}
(async function get() {
  try {
    const article = await fetchRandomNews();
    console.log(article);
    displayBlogs(article);
  } catch (error) {
    console.log(error);
  }
})();
