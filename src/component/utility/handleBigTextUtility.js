export const handleTextLength = (text, displayLength) => {
  let convertText = text.substr(0, displayLength);
  if (text.length > displayLength) {
    convertText = convertText + "...";
  }
  return convertText;
};
