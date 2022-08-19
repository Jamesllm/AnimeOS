export function saveDataLocal(data) {
  localStorage.setItem("AnimeOs", JSON.stringify(data));
}

export function getLocalData() {
  var storedData = localStorage.getItem("AnimeOs");
  let data;
  if (storedData === null) {
    data = [];
  } else {
    data = JSON.parse(storedData);
  }
  return data;
}
