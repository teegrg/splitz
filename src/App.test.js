import { fireEvent, render, screen } from '@testing-library/react';
import Members from './components/Members';


describe("<Members/>", () => {
  it("test to see typing is allowed in input field", () => {
    const { getByLabelText, getDisplayValue } = render(
      <Members/>
    );
    const input = getByLabelText("Number of Members:");
    const typedInput = 5
    const fakeEvent = { target: { value: typedInput } };
    fireEvent.change(input, fakeEvent);

    getDisplayValue(typedInput)
  })

  // it("testing for if non integers are allowed in input field", () => {
  //   const { getByLabelText, getByText } = render(
  //     <Members/>
  //   );
  //   const input = getByLabelText("Number of Members:");
  //   const fakeEvent = { target: { value: "a"} };
  //   fireEvent.change(input, fakeEvent);
  //   getByText()
    
  // })

})