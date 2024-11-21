// $(document).ready(() => {
//     $('#hamburger-menu').click(() => {
//         $('#hamburger-menu').toggleClass('active')
//         $('#nav-menu').toggleClass('active')
//     })

//     // setting owl carousel

//     let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

//     $('#hero-carousel').owlCarousel({
//         items: 1,
//         dots: false,
//         loop: false,
//         nav:true,
//         navText: navText,
//         autoplay: true,
//         autoplayHoverPause: true
//     })

//     $('#top-movies-slide').owlCarousel({
//         items: 2,
//         dots: false,
//         loop: false,
//         autoplay: true,
//         autoplayHoverPause: true,
//         responsive: {
//             500: {
//                 items: 3
//             },
//             1280: {
//                 items: 4
//             },
//             1600: {
//                 items: 6
//             }
//         }
//     })

//     $('.movies-slide').owlCarousel({
//         items: 2,
//         dots: false,
//         nav:true,
//         navText: navText,
//         margin: 15,
//         responsive: {
//             500: {
//                 items: 2
//             },
//             1280: {
//                 items: 4
//             },
//             1600: {
//                 items: 6
//             }
//         }
//     })
// })

const movie_name = async () => {
  event.preventDefault();
  try {
    const response = await fetch("http://localhost:3000/movie");
    const data = await response.json();
    console.log(data);

    let uniqueData = data.filter(
      (v, index, self) => index === self.findIndex((t) => t.name === v.name)
    );

    console.log(uniqueData);

    let print = ``;

    uniqueData.map((v) => {
      print += `
                <div class="movie-card">
                    <img src="imges/${v.image}" alt="Movie 1">
                    <h3 id="moviesss">${v.name}</h3>
                     <a href="Cinema_User.html"><button class="button-71" role="button" onclick="handleLocalStorage('${v.name}')">Submit</button>   </a>
                </div>         
        `;
    });

    print += "";
    
    document.getElementById("print").innerHTML = print;
  } catch (error) {
    console.log(error);
  }
};

const cinema_name = async () => {
  event.preventDefault();
  try {
    const response2 = await fetch("http://localhost:3000/user");
    const data2 = await response2.json();
    console.log(data2);

    let print2 = `
    `;

    data2.map((v) => {
      print2 += `
      
                <div class="movie-card">
                    <h3>${v.name}</h3>
                    <button class="button-71" role="button">Submit</button>
                </div>    
        `;
    });
            
    print2 += "";

    document.getElementById("print2").innerHTML = print2;
  } catch (error) {
    console.log(error);
  }
};

const handleLocalStorage = (n) => {
  console.log(n);
  
  localStorage.setItem("Movie_Name", n);
  localStorage.getItem("Movie_name"); 

}

const movi_all_data = async() => {
  try {
    const response3 = await fetch("http://localhost:3000/movie");
    const data3 = await response3.json();
    console.log(data3);



  } catch (error) {
    console.log(error);
    
  }
}

window.onload = function () {
  movie_name();
  cinema_name();
  movi_all_data();
};
