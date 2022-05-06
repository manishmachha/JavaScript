function func1(callback) {
    console.log("I am func1");
    console.log(callback);
    callback("manish");
}

function func2(name) {
    console.log("I am func2");
    console.log(`my name is ${name}`);
}

func1(func2);