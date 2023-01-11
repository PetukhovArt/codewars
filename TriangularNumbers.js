//7 kyu Beginner Series #5 Triangular Numbers
function isTriangular(t) {
    return (Math.sqrt(8 * t + 1) % 1 === 0);
  }