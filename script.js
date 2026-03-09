// input boy name

const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
     e.preventDefault();
    const boy = document.getElementById("yourName");
    const girl = document.getElementById("CrushName");
    const result = document.getElementById("actualR");
    const l1 = (boy.value.length);
        const l2 = (girl.value.length);
        const calculate =(l1*l2)+20;
    result.textContent=`Result : ${calculate}%`;
    form.reset();


});
