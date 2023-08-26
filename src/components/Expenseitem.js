// import './Expenseitem.css';

// function Expenseitems() {
//   const LocationOfExpenditure = "Patna"; 

//   return ( 
//     <div className='expense-item'>
//       <div>23 March 2023</div>
//       <div className='expense-item__description'>
//           <h2>Expenses</h2>
//           <div className='expense-item__price'>$352.23</div>
//           <div className='expense-item__location'>{LocationOfExpenditure}</div>
//       </div>
//     </div>
//   );
// }

// export default Expenseitems;
import './Expenseitem.css';

function Expenseitems() {
  const expenses = [
    {
      date: "23 March 2023",
      location: "patna",
      expenseItem: "Groceries",
      price: "$52.23"
    },
    {
      date: "24 september 2023",
      location: "delhi",
      expenseItem: "Coffee",
     
      price: "$5.50"
    },
    {
      date: "16 May 2023",
      location: "Mumbai",
      expenseItem: "Dinner",
  
      price: "$75.00"
    }
  ];

  return (
    <div>
      {expenses.map((expense, index) => (
        <div key={index} className='expense-item'>
          <div>{expense.date}</div>
          <div className='expense-item__description'>
            <h2>{expense.expenseItem}</h2>
            <div className='expense-item__price'>{expense.price}</div>
            <div className='expense-item__location'>{expense.location}</div>
           
          </div>
        </div>
      ))}
    </div>
  );
}

export default Expenseitems;

