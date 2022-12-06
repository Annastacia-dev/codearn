export function makeRatingStars(rating){
    // rating is a number between 0 and 5
    // return a star emoji for each whole number
    // return a half star emoji for each half number
    // return an empty star emoji for each remaining number
    // example: 3.5 => "★★★½☆"
    // example: 4.5 => "★★★★½"
    // example: 2.5 => "★★½☆☆"
    // example: 1.5 => "★½☆☆☆"
    // example: 0.5 => "½☆☆☆☆"
    // example: 0 => "☆☆☆☆☆"

    let stars = [];
    let wholeStars = Math.floor(rating);
    let halfStars = rating - wholeStars;
    let emptyStars = 5 - wholeStars - halfStars;

    for (let i = 0; i < wholeStars; i++) {
        stars.push("★");
    }
    for (let i = 0; i < halfStars; i++) {
        stars.push("½");
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push("☆");
    }

    return stars.join("");

}