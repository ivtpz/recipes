const makeMap = (useArray = false) => (accum, curr) => ({
  ...accum,
  [curr]: useArray ? [] : null
});

const orderResults = (ids, results, key = '_id', getDefault = () => null) => {
  const map = ids.reduce(makeMap(), {});
  results.forEach(result => {
    map[result[key]] = result;
  });
  return ids.map(id => map[id] || getDefault(id));
};

module.exports = orderResults