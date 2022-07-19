

class MyContract {

    // Constructor
    constructor(_name, _value) {
        this.name = String(_name);
        this.value = String(_value);
    };

    // Methods
    getName() {
        console.log(this.name);
        console.log(typeof(this.name));
        return (this.name);
    };

    getValue() {
        console.log(this.value);
        console.log(typeof(this.value));
        return this.value;
    };
};




// Deploy the Contract
const Contract = new MyContract('ERC20', 100);

// View Contract Data
Contract.getName();
Contract.getValue();