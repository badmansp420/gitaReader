function getdata() {

}
let activeValue = 0;
try {
    function getch(val) {
        // response = fetch("https://bhagavadgitaapi.in/chapter/1")
        //     .then(response => response.json())
        //     .then(data => console.log(data));
        // const data = await response.json();
        // console.log(data);


        fetch("https://bhagavadgitaapi.in/chapter/" + val.value + "/").then(result => {
            return result.json();
        }).then(key => {
            // console.log(key.chapter_number);
            // console.log(key.verses_count);
            // console.log(key.name);
            // console.log(key.meaning.en);
            // console.log(key.summary.en);
            document.getElementById('header').innerText = key.translation;
            document.getElementById('content').innerText = key.summary.en;
        })
        let act = document.getElementById(val.id);
        if (act.className == '' || act.className == null) {
            act.className = "active";
        }
        // else {
        //     act.className = '';
        // }
        // console.log(act.id);

    }

    function terr(a) {
        console.log("trr" + a);
    }

    // $(function () {
    //     $('li').click(function () {
    //         var elem = $(this);
    //         // alert('Class: ' + elem.attr('class'));
    //         alert('Id: ' + elem.attr('id'));
    //         // alert('Name: ' + elem.attr('name'));
    //     });
    // });

    $(document).ready(function () {
        $("li").click(function () {
            console.log('Id: ' + elem.attr('id'));
            // $("img").attr("width", "100");
            // alert("Width of the Image is: " + $("img").attr("width"));
        });
    });
} catch (e) {
    console.log(e);
}



function add(a, b) {
    return a + b;
}

console.log(add(10, 15));