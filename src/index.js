export default function orderByProps(targetObj, propsArr) {
  if (arguments.length === 0 || Object.entries(targetObj).length === 0) return [{}];
  if (typeof propsArr === 'undefined') propsArr = [];

  const foundProps = [];
  const otherProps = [];

  for (const item in targetObj) {
    const tempObj = { key: item, value: targetObj[item] };

    if (propsArr.find((i) => item === i)) foundProps.push(tempObj);
    else otherProps.push(tempObj);
  }
  return foundProps.concat(
    otherProps.sort((a, b) => (a.key > b.key ? 1 : -1)),
  );
}
