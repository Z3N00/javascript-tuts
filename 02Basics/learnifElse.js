var whoIsHere = 'teacher'

if (whoIsHere === 'user') {
    console.log("Greeting message for user")
    console.log("Allow access to view all courses")
}else if (whoIsHere === 'teacher') {
    console.log("Greeting message to teacher")
    console.log("Allow access to his courses")
}else{
    console.log("Message: Please verify your Email")
    console.log("Send user an Email for verification")
}