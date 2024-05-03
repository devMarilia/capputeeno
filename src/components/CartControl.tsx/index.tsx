import { styled } from "styled-components";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "../cart-icon";

const CartCount = styled.span<{ count: number }>`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0 5px;
    font-size: 10px;

    color: white;

    margin-left: -10px;

    background-color: ${({ count }) => count === 0 ? 'var(--delete-color)' : 'transparent'};

`

const Container = styled.div`
    position: relative;
`

export function CartControl(){
    const { value } = useLocalStorage('cart-items', [])
    const cartItemCount = value.length;

    return (
        <Container>
            <CartIcon/>
            <CartCount count={cartItemCount}>{cartItemCount}</CartCount>
        </Container>
    )
}
