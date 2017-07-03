# Benchmark
Benchmark web code with Performance API

### Mode of use
Just include the file in your page
```
<script src="benchmark.js" type="text/javascript"></script>
```

And then you can call the methods directly on `window.Benchmark`

Example:
```
// define a task
mytask = function() { ... };

// measure, will return the time it took to execute
Benchmark.measure(task);
> 0.010000000009313226

// report, will log to the console, and return the time
Benchmark.report(task);
> mytask took 0.005000000004656613 milliseconds
> 0.005000000004656613

// bm, will run it 1000 times, report it to console, and return the time  
Benchmark.bm(task);
> mytask took 0.005000000004656613 milliseconds
> 0.005000000004656613
```
