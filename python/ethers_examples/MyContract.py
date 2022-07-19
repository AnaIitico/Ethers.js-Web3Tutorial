
from dataclasses import dataclass


@dataclass
class MyContract:

    # default constructor
    name: str
    value: str

    # Methods
    def print_Name(self):
        _name = str(self.name)
        print(type(_name))
        print(_name)
        return _name

    def print_Value(self):
        _value = str(self.value)
        # _value = self.value
        print(type(_value))
        print(_value)
        return _value





# Deploy the Contract
Contract = MyContract('ERC20', 100)

# View Contract Data
Contract.print_Name()
Contract.print_Value()