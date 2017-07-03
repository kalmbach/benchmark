(function(){
  var _ = function() {};

  _.measure = function(task) {
    if (typeof(task) === "function") {
      var t0 = performance.now();
      task();
      var t1 = performance.now();

      return (t1 - t0);
    }

    console.log("Benchmark.measure: passed task is not a function.");
    return 0;
  }

  _.report = function(task, tag, time) {
    var name = tag || task.name;
    time = time || _.measure(task)

    console.log(name + " took " + time + " milliseconds");
    return time;
  }

  _.bm = function(task, tag, rounds) {
    rounds = rounds || 1000;
    var accumulator = [];

    for(var i = 0; i < rounds; i++) {
      accumulator += _.measure(task);
    }

    var average = accumulator / rounds;
    return _.report(task, tag, average);
  }

  if (typeof(self) !== "undefined") {
    self.Benchmark = _;
  }

  return _;
}());
