function HowToUse() {
  return (
    <div className="about">
      Using the Rent Splitting App: 1. Add Member Count: When you first open the
      app, you'll see an option to add members. You can specify the number of
      members who will be splitting the rent and expenses. 2. Choose Member
      Names: After adding the member count, you have two options for specifying
      member names: Use Default Names: If you don't want to customize member
      names, the app will assign default names (e.g., A, B, C) to each member.
      Customize Names: You can choose to customize member names by clicking on
      the "Customize" button. This will allow you to enter custom names for each
      member. 3. Add Rent Amount: Once you've added the members, you can enter
      the total rent amount in the designated input field. This amount will be
      split equally among all members. 4. Add Expenses: After entering the rent
      amount, you can start adding expenses: Category: Specify the category of
      the expense (e.g., groceries, utilities, etc.). Amount: Enter the amount
      of the expense. Expenses will be distributed equally among all members, in
      addition to their share of the rent. 5. Remove Expenses: If you need to
      remove an expense from a particular member: Click on the "Close" button
      next to the expense you want to remove. The removed expense will be
      redistributed among the remaining members. 6. Collect Owed Amounts: Once
      all expenses are added and distributed among members, one person can
      collect the owed amounts from all members. The total collected amount
      should match the total rent plus all expenses. 7. Reimburse Expenses: If a
      member has paid for an expense or a bill, they can be reimbursed from the
      total collected amount: Subtract the amount they paid from the total
      collected amount. This ensures that each member pays their fair share of
      the expenses. 8. Recap: The app provides a clear breakdown of each
      member's share of the rent and expenses. It allows for easy management of
      expenses, including addition, removal, and redistribution. It simplifies
      the process of splitting rent and expenses among multiple members,
      ensuring fairness and accuracy. 9. Enjoy: With the app's features, you can
      efficiently manage shared expenses, ensuring that everyone pays their fair
      share without any hassle. By following these steps, you can effectively
      use the app to split rent and expenses among multiple members while
      maintaining transparency and fairness in the process.
    </div>
  );
}

export default HowToUse;