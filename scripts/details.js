let studentData = JSON.parse(localStorage.getItem("studentData")) || [];


display(studentData)
function display(studentData) {
    document.getElementById("container").innerHTML = null;
    studentData.map(function (e, i) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = e.img;

        let name = document.createElement("h3");
        name.innerText = `Name:-${e.name}`;

        let batch = document.createElement('h3');
        batch.innerText = `Batch: ${e.batch}`;

        let unit = document.createElement("h3");
        unit.innerText = `Unit: ${e.unit}`;

        let course = document.createElement("h3");
        course.innerText = `Course: ${e.course}`;

        let btn = document.createElement("button");
        btn.innerText = "Removed";
        btn.setAttribute("class", "remove");
        btn.addEventListener("click", function () {
            removeFun(e, i);
        })

        div.append(img, name, unit, batch, course, btn)

        document.getElementById("container").append(div);
    })

}



function removeFun(e, i) {
    console.log(studentData, i);
    let ind = studentData[i];
    console.log(ind);
    studentData.splice(i, 1);

    localStorage.setItem("trash", JSON.stringify(ind));

    localStorage.setItem("studentData", JSON.stringify(studentData));

    display(studentData);
    batchFun();

}


function batchFun() {
    document.getElementById("navbar").innerHTML = null;
    let obj = {};
    
    for (let i = 0; i < studentData.length; i++) {
        if (!obj[studentData[i].batch]) {
            obj[studentData[i].batch] = 0;
        }
    }

    for (let i = 0; i < studentData.length; i++) {
            obj[studentData[i].batch]++;
    }

    console.log(obj);

    let batchArr = Object.keys(obj);

    batchArr.map(function(el){
        let div  = document.createElement("div");

        let p = document.createElement("p");
        p.innerText = el;
        console.log(p);


        let pno = document.createElement("p");
        pno.innerText = obj[el];
        console.log(pno);

        div.append(p, pno);

        document.getElementById("navbar").append(div);
    })


}
batchFun();

