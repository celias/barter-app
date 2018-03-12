import styled from 'styled-components';
import { generator } from 'uigradients';

export const LoginBtn = styled.button`
  background: ${generator({gradient: 'almost'})};
  color: light-grey;
  font-size: 1em;
  font-weight: 50;
  width: 200px;
  height: 50px;
  margin: 1em;
  padding: 0.25em 1em;
  border:  1px solid grey;
  border-radius: 3px;

`

// export const Pre = styled.pre`
//   ${generator({gradient: 'ali'})}
//   border-radius: 4px;
//   display: block;
//   width: 100%;
//   height: 100%;
// `