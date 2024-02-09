export async function apiData() {
  let data = await fetch("https://harinagr.onrender.com/get-files");
  data = await data.json();
  return data.data;
}
