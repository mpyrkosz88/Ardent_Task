$(function(){
    const btn = $('button');
    const input = $('#number-input')
    const ul = $('ul');

    btn.on('click', (event) => {
        event.preventDefault()
        const num = input.val();
        $.ajax({
            url : '/add',
            data : JSON.stringify({
                num,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            type : 'POST',
            dataType : 'json',
        }).then(resp => {
            ul.append('<li>' + resp.text + '</li>')
          })
        }
      );

});
