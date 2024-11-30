export default function sliceStringByWords(str, maxWords = 100) {
  const words = str.split(" ");

  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }

  return str;
}
