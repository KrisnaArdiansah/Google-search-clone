function search() {
  let { value } = document.getElementById("searchInput");

  const baseUrl = "https://www.google.com/search?q=";
  if (!value) value = "Lionel Messi";
  location.replace(baseUrl + value);
}
