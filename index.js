function makeDesk() { // функция рисует шахматную доску и присваивает ID каждой клетке
    let mainBlock = document.querySelector('.main-block');
    let block;
    let flag= true;
    var horizontal = ["A","B","C","D","E","F","G","H"];
    for (let i=0; i<8; i++)
    {
        for (let j=0; j<8; j++)
        {
             if (j===0) flag=!flag;
             block = document.createElement('div');

             if (flag)
             {
                block.className = 'block black';
                block.id=horizontal[j]+(8-i);
             }
             else
             {
                 block.className = 'block white';
                 block.id=horizontal[j]+(8-i);
             }

             mainBlock.appendChild(block);
             flag = !flag;

        }
    }

}
function f() //Функция присваивает атрибут анклик и туда прописывает функцию подсветки
{
    $(document).ready(function(){
        var horizontal = ["A","B","C","D","E","F","G","H"];
        for(let i=0; i<8; i++) {
            for (var j = 0; j < 8; j++) {
                $('.block').attr('onclick', 'fireBlock(this)');

               }
            }
       });
}
function fireBlock(el) // тут чуть переделал функцию из второго задания, только пользователь ничего не вводит, а кликает, при клике получаем id элемента
{
    var defaulPlace= el.id.split('');
    var horizontal = ["A","B","C","D","E","F","G","H"];
    var deafaultHorizont = null;
    var deafaultHorizontTMP = defaulPlace[0];
    for (let i=0; i<8; i++)
    {
        if(deafaultHorizontTMP===horizontal[i])
        {
            deafaultHorizont=i;
        }
    }
    var deafaultVertical = defaulPlace[1];

    var pointMap = (
        [
            [deafaultHorizont+2, +deafaultVertical+1],
            [deafaultHorizont+2, +deafaultVertical-1],
            [deafaultHorizont-2, +deafaultVertical+1],
            [deafaultHorizont-2, +deafaultVertical-1],
            [deafaultHorizont+1, +deafaultVertical+2],
            [deafaultHorizont-1, +deafaultVertical+2],
            [deafaultHorizont+1, +deafaultVertical-2],
            [deafaultHorizont-1, +deafaultVertical-2],
        ]);
    var variants="";
    for(let i=0; i<pointMap.length; i++)
    {
        var arr = pointMap[i];
        if (arr[0]>0 && arr[1]>0 && arr[0]<8 && arr[1]<8)
        {
            variants+= horizontal[arr[0]]+arr[1]+" ";
            document.getElementById(horizontal[arr[0]]+arr[1]).style.backgroundColor = 'red'; // а тут вместо ввода обозначений ячеек, в которые может перейти конь, красим эти ячейк в красный цвет
        }
    }
}
makeDesk();// вызываем функцию одну
f(); // вызываем функцию вторую
