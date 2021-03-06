import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 3rem;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
export const FlagsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`
export const Flag = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  height: 5rem;
  width: 5rem;
  font-size: 3rem;
`

export const InfoWrapper = styled.div`
  font-size: 2rem;

  p:last-of-type {
    margin-top: 1rem;
  }
`
