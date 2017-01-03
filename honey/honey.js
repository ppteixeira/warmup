jars = [];

//Create Jars
for (var i = 0; i < 100; i++) {;
  jars[i] = {
    state: "closed"
  };
}

//visit jars
for (var round = 1; round <= jars.length ; round++) {
  for (var i = round-1; i < jars.length; i+=round) {
    toggle(jars[i])
  }
}

// open / close jars
function toggle(obj) {
  if (obj.state === 'closed'){
    obj.state = 'open'
  }else {
    obj.state = 'closed'
  }
}


//display if jar is open or closed
for (var i = 0; i < jars.length; i++) {
  if (jars[i].state === 'closed'){
    console.log('Jar #' + i + ' Closed');
  }else {
    console.log('Jar #' + i + ' Open');
  }
}
