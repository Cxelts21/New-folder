// Đường dẫn API
const apiEndpoint = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3100c62264e044b1a12cefdacb3f6c1c";
// Element sẽ dùng để hiển thị danh sách sản phẩm
const productsContainer = document.getElementById("products");
 
// Lấy dữ liệu từ API
fetch(apiEndpoint)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    // [{ id: 1, title: '...', price: 0, ... }, { id: 2, title: '...', price: 0, ... }, ... ]
 
    // Render HTML
    data.forEach(product => {
      productsContainer.innerHTML += `
        <div>
          <h3>${product.title}</h3>
          <p>${product.price}</p>
        </div>
      `;
    });
  });