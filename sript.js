function filterNames(array) {
    const names = ["Alan", "Mark", "Karen", "Elaine", "Nora", "Alice", "Dora"];
    return array.filter(name => names.includes(name));
   }
   
   const inputArray = ["Alan", "Mark", "Karen", "Elaine", "Nora", "Alan", "Gary", "Alice", "Dora"];
   
   console.log(filterNames(inputArray));