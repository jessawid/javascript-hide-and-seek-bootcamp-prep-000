function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  var nElement = document.querySelector('div');
  var nestChildren = nElement.children;
  for (let i = 0; i < nestChildren.length; i++) {
    if (nestChildren[i].length !== 0) {
      var tClass = nestChildren[i];
      break;
    }
  }
  return tClass;
}

function increaseRankBy(n) {
  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranks.length; i++){
    var value = parseInt(ranks[i].innerHTML);
    ranks[i].innerHTML = (value + n).toString();
  }
}

function deepestChild() {
  var parentE = document.getElementById('grand-node');
  // var parentEChildren = parentE.children;
  // var numChildren = parentEChildren.length - 1;
  // var returnE = parentEChildren[numChildren];
  // return returnE;
  return parentE.children[(parentE.children.length-1)];
}
