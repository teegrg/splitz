import React from "react";

function HowToUse() {
  const nepaliNumbers = ["१", "२", "३", "४", "५", "६", "७", "८", "९", "१०"];

  return (
    <div className="about">
      <h2>Using the Rent Splitting App:</h2>
      <ol style={{ listStyleType: "none", paddingInlineStart: "0" }}>
        {nepaliNumbers.map((number, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>{number}</strong>
            {index === 0 && (
              <>. Add Member Count: When you first open the app, you'll see an option to add members. You can specify the number of members who will be splitting the rent and expenses.</>
            )}
            {index === 1 && (
              <>. Choose Member Names: After adding the member count, you can either choose to fill the names or use default tags for member names.</>
            )}
            {index === 2 && (
              <>. Add Rent Amount: Once you've added the members, you can enter the total rent amount in the designated input field. This amount will be split equally among all members.</>
            )}
            {index === 3 && (
              <>. Customize Rent Per Head: Click here to manually put rent amount for each member. For eg. someone living in master bedroom pays more than one that lives in a small room.</>
            )}
            {index === 4 && (
              <>. Add Expenses: After entering the rent amount, you can start adding expenses:
                <ul>
                  <li><strong>Category:</strong> Specify the category of the expense (e.g., groceries, utilities, etc.).</li>
                  <li><strong>Amount:</strong> Enter the amount of the expense. Expenses will be distributed equally among all members, in addition to their share of the rent.</li>
                </ul>
              </>
            )}
            {index === 5 && (
              <>. Remove Expenses: If you need to remove an expense from a particular member:
                <ul>
                  <li>Click on the "Close" button next to the expense you want to remove.</li>
                  <li>The removed expense will be redistributed among the remaining members.</li>
                </ul>
              </>
            )}
            {index === 6 && (
              <>. Collect Owed Amounts: Once all expenses are added and distributed among members, one person can collect the owed amounts from all members. The total collected amount should match the total rent plus all expenses.</>
            )}
            {index === 7 && (
              <>. Reimburse Expenses: If a member has paid for an expense or a bill, they can be reimbursed from the total collected amount.</>
            )}
            {index === 8 && (
              <>. Recap: The app provides a clear breakdown of each member's share of the rent and expenses. It allows for easy management of expenses, including addition, removal, and redistribution. It simplifies the process of splitting rent and expenses among multiple members, ensuring fairness and accuracy.</>
            )}
            {index === 9 && (
              <>. Enjoy: With the app's features, you can efficiently manage shared expenses, ensuring that everyone pays their fair share without any hassle. By following these steps, you can effectively use the app to split rent and expenses among multiple members while maintaining transparency and fairness in the process.</>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default HowToUse;
