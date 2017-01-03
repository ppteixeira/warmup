var size = 8;
var write = [];
for (var i = 0; i < size; i++) {
  if (i % 2 === 0) {
    for (var y = 0; y < size; y++) {
      write += ['# '];
    }
  }else {
    for (var y = 0; y < size; y++) {
      write += [' #'];
    }
  }
  console.log(write);
  write = [];
}
