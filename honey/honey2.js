// unoptimized (iterative)
var doors=[];
for(var i=0;i<100;i++)
doors[i]=false;             //create doors
for(var i=1;i<=100;i++)
for(var i2=i-1,g;i2<100;i2+=i)
 doors[i2]=!doors[i2];      //toggle doors
for(var i=1;i<=100;i++)      //read doors
console.log("Door %d is %s",i,doors[i-1]?"open":"closed")


// unoptimized (functional)
(function () {
  return chain(

    // 100 passes ...
    rng(0, 99).reduce(function (a, _, i) {
      return a.slice(0, i).concat(
        a.slice(i).map(function (v, j) {
          return (i + j + 1) % (i + 1) ? v : {
            door: v.door,
            open: !v.open
          };
        })
      )
    },

    // 100 closed doors at start
    Array.apply(null, Array(100)).map(function (x, i) {
      return {
        open: false,
        door: i + 1
      };
    })),

    // Filtering by chained function
    function (door) {
      return door.open ? [door] : [];
    }
  )

  // Monadic bind (chain) for lists
  function chain(xs, f) {
    return [].concat.apply([], xs.map(f));
  }
}
)
