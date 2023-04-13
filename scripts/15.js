document.addEventListener("DOMContentLoaded", () => {

    const bts = document.querySelectorAll('button');
    console.log(bts);

    //document.querySelector('#h2Id').textContent = bts.textContent;

    var list = "";
    //case1
    for(let i = 0; i < bts.length; i++) {
        // console.log(bts[i].textContent);
        list = list + "<li>" + bts[i].textContent + "</li>";
        
    }
    document.getElementById("h2Id").innerHTML = list;

    //case2
    // bts.forEach((item) => {
    //     console.log(item.textContent);
    // });

    //case3
    // bts.forEach((item, idx) =>{
    //     console.log(item.textContent, idx);
    // });

    //case4
    //for (let idx in bts)    {
    //    console.log(bts[idx].textContent);
    //}

    // for (let item of bts)   {
    //     console.log(item.textContent);
    // }

});