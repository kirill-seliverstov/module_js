"use strict";

fetch('https://rickandmortyapi.com/api/character').then(function (data) {
  return data.json();
}).then(function (data) {
  console.log(data);
});
