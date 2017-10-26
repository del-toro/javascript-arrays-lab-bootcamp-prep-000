//const app = "I don't do much."
//mykittens = ["Milo", "Otis", "Garfield"];

function kittens(){
  return mykittens;
}

function destructivelyAppendKitten(name){
  mykittens.push(name);
  return mykittens;
}

function destructivelyPrependKitten(name){
  mykittens.unshift(name);
  return mykittens;
}

function destructivelyRemoveLastKitten(){
  mykittens.pop();
  return mykittens;
}

function destructivelyRemoveFirstKitten(){
  mykittens.shift();
  return mykittens;
}

function appendKitten(name){
  var newkittens = [...mykittens, name]
  return newkittens;
}
