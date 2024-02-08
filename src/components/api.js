export async function apiData() {
    let data = await fetch("http://localhost:5000/get-files");
    data = await data.json();
    return data.data;
  }