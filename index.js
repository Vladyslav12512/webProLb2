const getTheHottestDay = () => {
  let maxNode;

  document.querySelectorAll('tr').forEach((currNode) => {
    const currentNodeValue =
      parseFloat(currNode.children[3].textContent) || -Infinity;

    if (currentNodeValue > (maxNode?.maxTemp || 0)) {
      maxNode = {
        date: currNode.children[2].textContent,
        maxTemp: currentNodeValue,
      };
    }
  });

  alert(
    `Дата найспекотнішого дня:${maxNode.date}   Температура:${maxNode.maxTemp}`
  );
};
