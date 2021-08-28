export default function orderByProps(targetObj, propsArr) {
  const foundProps = [];
  const otherProps = [];
  if (typeof propsArr === 'undefined') propsArr = [];
  for (const item in targetObj) {
    const tempObj = { key: item, value: targetObj[item] };

    if (propsArr.find((i) => item === i)) foundProps.push(tempObj);
    else otherProps.push(tempObj);
  }
  return foundProps.concat(
    otherProps.sort((a, b) => (a.key > b.key ? 1 : -1)),
  );
}
