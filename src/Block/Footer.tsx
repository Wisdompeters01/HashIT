import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>
        <Text>
          <p>2023 HashIT App Ltd. Allrights reserved.</p>
        </Text>
      </Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #eeeeee;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  p {
    font-weight: 200;
  }
`;
