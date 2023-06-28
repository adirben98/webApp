function postToFacebook (_message){
    const access_token=""
const message=_message
const page_id='101601342993691'
const api_url='https//graph.facebook.com/v16.0/'+page_id+'/feed'
const postData={message:message,
                access_token:access_token
}
$.ajax({
url:api_url,
type:'POST',
data:postData,
success:function(response){
    console.log('Success!')

},
error:function(xhr,status,error){
    console.log('Error!')
}
})
}
module.exports = postToFacebook