class Budget {
  constructor() {
    this.budget = document.getElementById("Budget");
  }

  bug() {
    event.preventDefault();

    if (this.budget.value === "") {
      document.getElementById("BudgetError").innerHTML = "Enter budget!";
    } else {
      if (isNaN(this.budget.value) || parseInt(this.budget.value) <= 0) {
        document.getElementById("BudgetError").innerHTML = "Enter a number!";
      } else {
        document.getElementById("BudgetError").innerHTML = "";
        localStorage.setItem("budget", JSON.stringify(this.budget.value));
        this.handlebuget();
      }
    }
  }

  handlebuget() {
    const handlbudget = JSON.parse(localStorage.getItem("budget"));
              
    console.log(handlbudget);

    const handlexpense = JSON.parse(localStorage.getItem("expense"));

    console.log(handlexpense);

    if (handlexpense) {
      const totalexp = handlexpense.reduce((acc, v) => acc + v.amount, 0);

      document.getElementById("expense").innerHTML = totalexp;
      document.getElementById("bal").innerHTML = handlbudget - totalexp;
    }
    document.getElementById("budget").innerHTML = handlbudget;
  }
}

class Expense extends Budget {
  constructor() {
    super();
    this.expense = document.getElementById("Expense");
    this.Expense_Amount = document.getElementById("Expense_amo");
    this.update = null;
  }

  exp() {
    event.preventDefault();
    let flag = true;

    if (this.expense.value === "") {
      flag = false;
      document.getElementById("ExpenseError").innerHTML = "Enter expense title";
    } else {
      document.getElementById("ExpenseError").innerHTML = "";
    }

    if (this.Expense_Amount.value === "") {
      flag = false;
      document.getElementById("ExpenseAmoError").innerHTML =
        "Enter Expense Amount!";
    } else {
      if (
        isNaN(this.Expense_Amount.value) ||
        parseInt(this.Expense_Amount.value) <= 0
      ) {
        flag = false;
        document.getElementById("ExpenseAmoError").innerHTML =
          "Enter a number!";
      } else {
        document.getElementById("ExpenseAmoError").innerHTML = "";
        this.handleamoaxp();
      }
    }

    let Exparr = [];

    if (flag) {
      let obj = {
        id: Math.floor(Math.random() * 10000),
        name: this.expense.value,
        amount: parseInt(this.Expense_Amount.value),
      };
      let localexp = JSON.parse(localStorage.getItem("expense"));

      if (this.update) {
        console.log("update");

        let iteam = localexp.findIndex((v) => v.id === this.update);

        localexp[iteam] = obj;

        localStorage.setItem("expense", JSON.stringify(localexp));

        const parantdiv = document.getElementById("Exp-" + this.update);
        
        console.log(parantdiv);
        
        parantdiv.childNodes[0].textContent = this.expense.value;
        parantdiv.childNodes  [1].textContent = this.Expense_Amount.value;

        this.update = null;
      } else {
        console.log("add");
        Exparr.push(obj);
        if (localexp) {
          localexp.push(obj);
          localStorage.setItem("expense", JSON.stringify(localexp));
        } else {
          localStorage.setItem("expense", JSON.stringify([obj]));
        }
        this.handleEle(obj);
      }

      this.handlebuget();
    }
  }

  handleamoaxp() {
    document.getElementById("expense").innerHTML = this.Expense_Amount.value;
  }

  handleEdit(id) {
    let localExpEdit = JSON.parse(localStorage.getItem("expense"));
    let Edata = localExpEdit.find((v) => v.id === id);
    this.expense.value = Edata.name;
    this.Expense_Amount.value = Edata.amount;
    this.update = id;


  }

  handlDelete(id) {
    const Del = document.getElementById("Exp-" + id);
    Del.remove(id);
    let localexp1 = JSON.parse(localStorage.getItem("expense"));
    let fadata = localexp1.filter((item) => item.id !== id);
    localStorage.setItem("expense", JSON.stringify(fadata));

    this.handlebuget();
  }

  handleEle(obj) {
    const main = document.getElementById("MainEle");

    const Exp = document.createElement("div");
    Exp.setAttribute("id", "Exp-" + obj.id);

    const Exptitle = document.createElement("span");
    Exptitle.setAttribute("id", "Exp-" + obj.id);
    Exptitle.textContent = obj.name;
    Exptitle.setAttribute("id","ExpTitle");
    Exp.appendChild(Exptitle);

    const ExpValTax = document.createElement("span");
    ExpValTax.textContent = obj.amount;
    ExpValTax.setAttribute("id","ExpValue");
    Exp.appendChild(ExpValTax);

    const buttEle = document.createElement("button");
    buttEle.textContent = "Delete";
    Exp.appendChild(buttEle);
    buttEle.addEventListener("click", () => {
      this.handlDelete(obj.id);
    });

    const Editbutt = document.createElement("button");
    Editbutt.textContent = "Edit";
    Exp.appendChild(Editbutt);
    Editbutt.addEventListener("click", () => {
      this.handleEdit(obj.id);
    });

    main.appendChild(Exp);
  }
}

const b = new Budget();
const e = new Expense();

const budgetform = document.getElementById("f1");
budgetform.addEventListener("submit", function () {
  b.bug();
});
const Expenseform = document.getElementById("f2");
Expenseform.addEventListener("submit", function () {
  e.exp();      
});

window.onload = function () {
  b.handlebuget();
  const Exponlode = JSON.parse(localStorage.getItem("expense"));
  console.log(Exponlode);
  Exponlode.map((v) => {
    e.handleEle(v);
  });
};
