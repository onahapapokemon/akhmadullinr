var name = 'admin', text;
name = prompt('please login');
text = (name == 'admin')? 'hi':
    (name === 'manager')? 'hello':
        (name === '')? 'no login':
            '';
alert(text);
