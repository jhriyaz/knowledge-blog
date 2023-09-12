let getFromLocalStorage = (targetData) => {
  let localData = localStorage.getItem(targetData);
  if (localData) {
    let localDataObj = JSON.parse(localData);
    return localDataObj;
  }
  if (targetData === "time") {
    return 0;
  }
  return [];
};
let setOnLocalStorage = (data, targetData) => {
  if (targetData === "time") {
    localStorage.setItem(targetData, JSON.stringify(data));
    return;
  }
  let savedData = getFromLocalStorage(targetData);
  savedData.push(data);
  localStorage.setItem(targetData, JSON.stringify(savedData));
};
let removeFromLocalStorage = (data, targetData) => {
  let savedData = getFromLocalStorage(targetData);
  let ooo = savedData.filter((tittle) => !(tittle === data));
  localStorage.setItem(targetData, JSON.stringify(ooo));
};
export { setOnLocalStorage, getFromLocalStorage, removeFromLocalStorage };
