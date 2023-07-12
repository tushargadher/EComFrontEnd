export const addEllipsis = (text) => {
  if (text.length > 50) {
    return text.substring(0, 50) + "...";
  }
  //if text is less then 50 return original text
  return text;
};
