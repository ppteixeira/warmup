var size = 8;
var write = [];
for (var i = 0; i < size; i++) {
  if (i % 2 === 0) {
    for (var y = 0; y < 8; y++) {
      write += ['# '];
    }
  }else {
    for (var y = 0; y < 8; y++) {
      write += [' #'];
    }
  }
  console.log(write);
  write = [];
}
