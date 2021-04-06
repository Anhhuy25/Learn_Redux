const pagination = (data) => {
  const pkmPerPage = 20;
  let pages = Math.ceil(data.length / pkmPerPage);

  const newData = Array.from({ length: pages }, (_, index) => {
    const start = index * pkmPerPage;
    return data.slice(start, start + pkmPerPage);
  });

  return newData;
};

export default pagination;
