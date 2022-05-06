function func1() {
    function func2() {
        console.log("inside func2");
    }

    function func3() {
        console.log("inside func3");
    }
    console.log("inside func1");
    func2();
    func3();
}
func1();