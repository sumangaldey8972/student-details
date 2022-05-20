let studentArr = JSON.parse(localStorage.getItem("studentData")) || [];
    function submit(n, c, u, i, b) {
        this.name = n;
        this.course = c;
        this.unit = u;
        this.img = i;
        this.batch = b;
    }

    function submitFun(e) {
        event.preventDefault();

        let form = document.getElementById('form');

        let name = form.name.value;
        let course = form.course.value;
        let unit = form.unit.value;
        let img = form.img.value;
        let batch = form.batch.value;


        let student = new submit(name, course, unit, img, batch);
        studentArr.push(student);

        localStorage.setItem("studentData", JSON.stringify(studentArr));

        document.getElementById("name").value = null;
        document.getElementById("course").value = null;
        document.getElementById("unit").value = null;
        document.getElementById("img").value = null;
        document.getElementById("batch").value = null;
    }