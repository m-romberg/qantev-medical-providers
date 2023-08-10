/**
 * snakeCaseToCapitalText
 *
 * Takes in a string in snake case and returns spaced capitals
 *
 * ex: "hello_there" => "Hello There"
 */
function snakeCaseToCapitalText(snake) {
  // Split the input string by underscores
  const words = snake.split('_');

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  // Join the capitalized words with spaces to form the final text
  const result = capitalizedWords.join(' ');

  return result;
}

export default snakeCaseToCapitalText;