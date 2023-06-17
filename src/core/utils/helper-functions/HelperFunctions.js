export const filteredList = (list, searchValue) =>
  searchValue.length < 1
    ? []
    : list.filter(
        (elm) =>
          elm.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          elm.author.toLowerCase().includes(searchValue.toLowerCase())
      );
