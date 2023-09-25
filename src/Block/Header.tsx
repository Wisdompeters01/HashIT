import React from "react";
import styled from "styled-components";
import img1 from "../assets/logo-black-12822108.svg";
import img2 from "../assets/light-mode-btn-8c3556bd.svg";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Img src={img1} />
        </Wrapper>
        <Ho>
          <Img1 src={img2} />
        </Ho>
      </Container>
    </div>
  );
};

export default Header;

const Img = styled.img``;

const Img1 = styled.img``;

const Container = styled.div`
  width: 40%;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 15%;
  height: 50px;
  margin-left: 17%;
`;

const Ho = styled.div`
  width: 35%;
  height: 50px;
  margin-left: 200%;
`;
