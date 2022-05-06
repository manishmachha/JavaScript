function func(a, b, ...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(`c is ${typeof c}`);
};

func(1, 2, 3, 4, 5, 6);