function getScroller (el) {
  /* eslint-disable-next-line */
  let node = el ? el : window;
  const { overflowY } = window.getComputedStyle(node);
  const scrollState = ['scroll', 'auto'];
  while (node && node.nodeName !== 'HTML' && node.nodeType === 1) {
    if (scrollState.includes(overflowY)) {
      return node;
    }
    node = node.parentNode;
  }
  return node;
}

export default getScroller;
