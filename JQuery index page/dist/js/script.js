$(document).ready(function(){
    console.log("test");
})

//Hide navbar
$(document).ready(function(){
    $(".button").click(function(){
        $(".navbar").toggleClass("hidden");
        $(".meniuItems").toggle();
        $("#arrow").toggleClass("down");
    })
})

//Scroll event

let text = $(".text");

window.addEventListener("scroll", function(){
    let scrollPos = this.scrollY;

    let text = document.querySelector(".container");
    let textPos = text.getBoundingClientRect().top;

    if(scrollPos>=100){
        text.style.opacity = 1;
    }
})

//Scroll to section2

$(document).ready(function(){
    $("#toSection2").click(function(){
        $("html, body").animate({
            scrollTop: $("#section2").offset().top
        }, 500);
    });
});

//Form control

$(document).ready(function(){
    const data = [];

    // Data input
    $("#submit").click(function(e){
        e.preventDefault(); //Prevent from page refresh

        let firstName = $("input[name=firstName]").val();
        let email = $("input[name=email]").val();

        if(!firstName || !email){
            return alert("Suveskite duomenys");
        }

        let user = firstName + ", "+email;
        data.push(user);

        $("input[name=firstName]").val("");
        $("input[name=email]").val("");
        $("#list").empty();

        for(let i = 0; i < data.length;i++){
            $("#list").append("<li>"+data[i]+"</li>");
        }
    });

    // Show/hide Data
    $("#clearList").click(function(){
        $("#list").empty();
    });

    $("#showArray").click(function(){
        if((data.length==0)){
            alert("Duomenu nera!")
        }

        $("#list").empty();
        for(let i = 0; i < data.length;i++){
            $("#list").append("<li>"+data[i]+"</li>");
        }
    });

    //Delete Data
    $("#clearArray").click(function(){
        alert("Duomenys bus pasalinti!");
        data.splice(0, data.length);
        $("#list").empty();
    })
});

//Dropdown meniu

$(document).ready(function(){
    $("#meniuMain").hover(function(){
        $("#main").toggleClass("show");
    });
});

$(document).ready(function(){
    $("#aboutMeniu").hover(function(){
        $("#about").toggleClass("show");
    });
});

$(document).ready(function(){
    $("#contactsMeniu").hover(function(){
        $("#contacts").toggleClass("show");
    });
});

$(document).ready(function(){
    $("#formMeniu").hover(function(){
        $("#dataForm").toggleClass("show");
    });
});