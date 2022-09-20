const spanList = document.querySelectorAll('.letter-animation')
const imgList = document.querySelectorAll('.our-story__img--mod')
let i = 0
let n = 100
spanList.forEach(item => {
	i += n
	item.setAttribute('data-aos-delay', i)
	item.setAttribute('data-aos', 'zoom-in-up')
	item.setAttribute('data-aos-duration', 750)
})

let j = 0 // Start Point
let images = [] // Images Array
let time = 4000 // Time Between Switch

// Image List
images[0] = './img/image5.png'
images[1] = './img/image2.png'
images[2] = './img/image3.png'
images[3] = './img/image4.png'
images[4] = './img/image1.png'
images[5] = './img/image6.png'
images[6] = './img/image7.png'
images[7] = './img/image8.png'
images[8] = './img/image9.png'

// Change Image
function changeImg() {
	document.slide.src = images[j]
	// Check If Index Is Under Max
	if (j < images.length - 1) {
		// Add 1 to Index
		j++
	} else {
		// Reset Back To O
		j = 0
	}

	// Run function every x seconds
	setTimeout('changeImg()', time)
}

// Run function when page loads
window.onload = changeImg

// select the target node
var target = document.getElementById('mce-success-response');

// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (target.innerHTML === "Thank you for subscribing!") {
      target.innerHTML = '<img class="checkimg" src="./img/check.svg" alt=""><p>You will receive instructions on how to download the e-book in the next e-mail.<span class="bold700">Check your email inbox.</span></p>';
    }
  });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);