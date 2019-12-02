class InsurancePolicy:
    def __init__(self, price_of_item):
        self.price_of_insured_item = price_of_item

    def __repr__(self):
        return "{}".format(self.price_of_insured_item)


class VehicleInsurance(InsurancePolicy):
    def get_rate(self):
        return self.price_of_insured_item * .001



class HomeInsurance(InsurancePolicy):
    def get_rate(self):
        return self.price_of_insured_item * .00005


check = InsurancePolicy(500)

print(str(check))