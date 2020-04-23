let myYoutubeVideo1 = {
    title: 'Loops in javascript',
    videoLength: 15,
    videoCreator: 'Zeno',
    videoDescription: 'this is a video description and a long one'
}

let myYoutubeVideo2 = {
    title: 'Functions in javascript',
    videoLength: 10,
    videoCreator: 'Zeno',
    videoDescription: 'this is a video description and a long one'
}

// console.log(myYoutubeVideo)
// console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)

// myYoutubeVideo.title = 'for each loop in js'

// console.log(`Hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`)
// console.log(myYoutubeVideo)


let changeVideoLength = function(myObject){
    return{
        formatOne: `Time for this video is: ${myObject.videoLength + 2}`,
        formatTwo: `Time for this video is: ${myObject.videoLength + 1}`
    }

}

let adOne = changeVideoLength(myYoutubeVideo2)

console.log(adOne.formatOne)