function submitForm() {
  const queryInput = document.getElementById("query");
  const queryValue = queryInput.value;
  window.location.href = `/search?search_query=${encodeURIComponent(
    queryValue
  )}`;
}
