let studentData = JSON.parse(localStorage.getItem("studentData"));
    console.log(studentData);


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
            btn.addEventListener("click", function (e, i) {
                removeFun(e, i);
            })

            div.append(img, name, unit, batch, course, btn)

            document.getElementById("container").append(div);
        })

    }



    function removeFun(e, i) {
        studentData.splice(i, 1);

        // localStorage.setItem("trash", JSON.stringify());

        localStorage.setItem("studentData", JSON.stringify(studentData));

        display(studentData);

    }

    let alpha = 0
    let bravo = 0;
    for (let i = 0; i < studentData.length; i++) {
        if (studentData[i].batch == "ALPHA") {
            alpha++;
        } else if (studentData[i].batch == "BRAVO") {
            bravo++;
        }
    }
    //console.log(alpha);
    //console.log(bravo);

    document.getElementById("alpha").append(`ALPHA - ${alpha}`)
    document.getElementById("bravo").append(`BRAVO - ${bravo}`)