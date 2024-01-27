import {render,screen,fireEvent} from '@testing-library/react'
import Reviews from './Reviews'


test('Increase and Decrease button functionality', ()=>
{
    let {getByRole,getByText,queryByText,findByText}=render(<Reviews/>)
    let billInfo = getByText(/susan smith/);
    let increaseButton=getByRole(/increase/i)
    let decreaseButton=getByRole(/decrease/i)
    fireEvent.click(increaseButton)
    let billInfoUpdated = getByText(/anna/);
    expect(billInfo).toBeInTheDocument()
    expect(billInfoUpdated).toBeInTheDocument()
})