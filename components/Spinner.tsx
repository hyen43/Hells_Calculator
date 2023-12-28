import RingLoader from "react-spinners/RingLoader";
import styled from "styled-components";

const SpinnerWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
`;
export default function Spinner() {
  return (
    <SpinnerWrapper>
      <RingLoader color="#ffffff" size={80} />
    </SpinnerWrapper>
  );
}
