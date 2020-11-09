const Account = {
    name : 'John',
addExpenses1:['Beli Makanan', 15000],
addExpenses2:['Ongkos', 30000],
get getAccountSummary(){
    return this._getAccountSummary;
  },
  set getAccountSummary(value){
      this._getAccountSummary = value;
      Account.push('Beli Makanan', 15000);
      Account.push('Onngkos', 30000);
      console.log(push);
  },
  addExpenses: function(){
     let amount = 0;
      this._getAccountSummary.forEach(function(addExpenses){
        amount = totalExpense + addExpenses;
      });
      this.amount = totalExpense + 2;
      console.log(addExpense[1].addExpense[2].getAccountSummary);
    },
};
console.log(Account);


