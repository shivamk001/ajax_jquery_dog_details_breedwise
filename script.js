(function(){
    $.get('https://dog.ceo/api/breeds/list/all', function(data){
       console.log(data) 
       $.each(data.message, function(key, value){
        if(value.length>=1){
            $.each(value, function(breed){
                let text=value[breed]+' '+key
                let val=key+'/'+value[breed]
                $('#dog-breed-list').append(
                    $('<option></option>')
                    .attr('value', val)
                    .text(text)
                )
            })
        }
        else{
 
            $('#dog-breed-list').append(
                $('<option></option>')
                .attr('value', key)
                .text(key)
            )
        }
        })
    })
    })()
function fetchRandomDogImage(){
    
    let value=$("#dog-breed-list").val()
    console.log(value);
    //MORE SIMPLIFIED
    // https://dog.ceo/api/breed/affenpinscher/images/random
    $.get(`https://dog.ceo/api/breed/${value}/images/random`, function(data){
        console.log(data.message)
        var imageUrl= data.message;
        $('#dog-image').attr('src', imageUrl).css({ "width": "200px", "height": "200px"});
    })
    .fail(function(xhr, textStatus, errorThrown){
        console.log('Request Failed:', errorThrown)
    })
}

$("#dog-breed-list").change(()=>{
    //var value = $(this).val();
    
})
$("#dog_image_button").click(fetchRandomDogImage)

$("#next_image_button").click(fetchRandomDogImage)