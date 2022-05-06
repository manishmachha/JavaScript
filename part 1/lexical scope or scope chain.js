let var1 = 10;

function func1() {
    let var2 = 5;

    function func2() {
        let var3 = 1;

        function func3() {
            console.log("inside func3");
            console.log(var1);
            console.log(var2);
            console.log(var3);
        }

        console.log("inside func2");
        console.log(var1);
        console.log(var2);
        func3();
    }

    console.log("inside func1");
    console.log(var1);
    func2();
}
func1();