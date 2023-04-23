# webProLb2

Варіант 1
Є сторінка з даними про температуру. Написати сценарій
(можна у вигляді букмарклету або у вигляді сценарію у складі запропонованої сторінки),
що виводить інформацію про найбільш спекотний день (його дату і відповідну температуру).

https://knureigs.github.io/itech/lb/ITech1_JS/ITech1_LabJS_meteo_kh.htm -- посилання на таблицю температури


#Скрін роботи букмарклету
![image](https://user-images.githubusercontent.com/116881961/233861120-0001c9b2-6e5f-487c-b5cd-96a345e50138.png)

# Текст для букмарклету:
javascript:(() => {  let maxNode;  document.querySelectorAll('tr').forEach((currNode) => {    const currentNodeValue =      parseFloat(currNode.children[3].textContent) || -Infinity;    if (currentNodeValue > (maxNode?.maxTemp || 0)) {      maxNode = {        date: currNode.children[2].textContent,        maxTemp: currentNodeValue,      };    }  });  alert(    `Дата найспекотнішого дня:${maxNode.date}   Температура:${maxNode.maxTemp}`  );})();
